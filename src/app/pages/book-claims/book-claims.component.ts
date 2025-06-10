import {Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from '../../shared/components/general/banner/banner.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {isPlatformBrowser, NgIf} from '@angular/common';
import {NgxCaptchaModule} from 'ngx-captcha';
import {Router} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-book-claims',
  standalone: true,
  imports: [
    TranslatePipe,
    BannerComponent,
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    NgxCaptchaModule
  ],
  templateUrl: './book-claims.component.html',
  styleUrl: './book-claims.component.css'
})
export class BookClaimsComponent implements OnInit{
  @ViewChild('captchaContainer') captchaContainer!: ElementRef;
  recaptchaLoaded = false;

  reclamationForm!: FormGroup;
  isBrowser = false;
  showSuccessModal = false;
  constructor(private fb: FormBuilder, @Inject(PLATFORM_ID) private platformId: Object, private title:Title, private meta:Meta, private router: Router, private translate:TranslateService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  site_key:string='6LdRCh4rAAAAANhdQqrPuYoSXDcdED9Y9GQwtlmo'
  ngOnInit(): void {

    this.reclamationForm = this.fb.group({
      provider: this.fb.group({
        name: ['', Validators.required],
        ruc: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
        address: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{7,11}$/)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      consumer: this.fb.group({
        name: ['', Validators.required],
        dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        address: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{7,11}$/)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      isMinor: [false],
      minor: this.fb.group({
        name: [''],
        dni: [''],
        email: [''],
        phone: [''],
      }),
      claimType: ['', Validators.required],
      product: this.fb.group({
        name: ['', Validators.required],
        amountClaimed: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        description: ['', Validators.required]
      }),
      details: this.fb.group({
        claimDescription: ['', Validators.required],
        requestedAction: ['', Validators.required]
      }),
      terms: [false, Validators.requiredTrue],
      recaptcha: ['', Validators.required],
    });

    this.handleMinorFieldValidation();

    this.setTranslatedMeta();

    // Se actualiza automáticamente al cambiar idioma
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedMeta();
    });
  }




  private handleMinorFieldValidation(): void {
    this.reclamationForm.get('isMinor')?.valueChanges.subscribe((isMinor: boolean) => {
      const minorGroup = this.reclamationForm.get('minor') as FormGroup;
      if (isMinor) {
        minorGroup.get('name')?.setValidators([Validators.required]);
        minorGroup.get('dni')?.setValidators([Validators.required, Validators.pattern(/^\d{8}$/)]);
        minorGroup.get('email')?.setValidators([Validators.required]);
        minorGroup.get('phone')?.setValidators([Validators.required]);
      } else {
        minorGroup.get('name')?.clearValidators();
        minorGroup.get('dni')?.clearValidators();
        minorGroup.get('email')?.clearValidators();
        minorGroup.get('phone')?.clearValidators();
      }

      minorGroup.get('name')?.updateValueAndValidity();
      minorGroup.get('dni')?.updateValueAndValidity();
      minorGroup.get('email')?.updateValueAndValidity();
      minorGroup.get('phone')?.updateValueAndValidity();});
  }

  onSubmit(): void {
    if (this.reclamationForm.invalid) {
      this.reclamationForm.markAllAsTouched();
      console.log('Formulario no valido:', this.reclamationForm.value);
      console.log('Campos inválidos:', this.findInvalidControls(this.reclamationForm));
      return;
    }
    if (this.reclamationForm.valid) {
      const formData = this.reclamationForm.value;
      formData.form = 'libro-reclamaciones';

      // Cambia esta URL por la de tu Apps Script o API
      const url = 'https://script.google.com/macros/s/AKfycbwQ6clI6kJl3HRLlGN6oAz22TS1ZMU29M84nP14i4S1pCjdtOMd-a7yPFTSfcvg5rOv/exec';
      // Configurar los encabezados de la solicitud
      const headers = {
        'Content-Type': 'text/plain;charset=utf-8'
      };

      // Usamos fetch para enviar la solicitud POST
      fetch(url, {
        redirect:'follow',
        method: 'POST',
        headers: headers,
        body: JSON.stringify(formData) // Convertir formData a JSON
      })
        .then(()=> {
          this.showSuccessModal = true;
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 4000);
          this.reclamationForm.reset();
        })
        .catch((error) => {
          console.error('Error al enviar los datos:', error);
          alert('Ocurrió un error al enviar el formulario.');
        });
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }
  private findInvalidControls(formGroup: FormGroup, path: string = ''): string[] {
    let invalids: string[] = [];
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      const currentPath = path ? `${path}.${key}` : key;

      if (control instanceof FormGroup) {
        invalids = [...invalids, ...this.findInvalidControls(control, currentPath)];
      } else if (control && control.invalid) {
        invalids.push(currentPath);
      }
    });
    return invalids;
  }
  closeModal() {
    this.showSuccessModal = false;
    this.router.navigate(['/']);
  }

  private setTranslatedMeta() {
    this.translate.get(['meta.book-claims.title', 'meta.book-claims.description']).subscribe(translations => {
      this.title.setTitle(translations['meta.book-claims.title']);

      this.meta.updateTag({
        name: 'description',
        content: translations['meta.book-claims.description']
      });

      // Canonical puede mantenerse fijo si no cambia según idioma
      this.meta.updateTag({
        rel: 'canonical',
        href: 'https://andeanelite.com/book-claims'
      });
    });
  }

  loadRecaptcha() {
    if (this.recaptchaLoaded) return;

    // Carga el script dinámicamente
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.recaptchaLoaded = true;
      // Aquí puedes inicializar el captcha si es necesario
    };
    document.head.appendChild(script);
  }

}

