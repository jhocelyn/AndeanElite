import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {BannerComponent} from '../../shared/components/general/banner/banner.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-book-claims',
  standalone: true,
  imports: [
    TranslatePipe,
    BannerComponent,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './book-claims.component.html',
  styleUrl: './book-claims.component.css'
})
export class BookClaimsComponent implements OnInit{
  reclamationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.reclamationForm = this.fb.group({
      provider: this.fb.group({
        name: ['', Validators.required],
        ruc: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
        address: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{7,9}$/)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      consumer: this.fb.group({
        name: ['', Validators.required],
        dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
        address: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern(/^\d{7,9}$/)]],
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
      claimDetail: ['', Validators.required],
      product: this.fb.group({
        name: ['', Validators.required],
        amountClaimed: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        description: ['', Validators.required]
      }),
      details: this.fb.group({
        claimDescription: ['', Validators.required],
        requestedAction: ['', Validators.required]
      })
    });

    this.handleMinorFieldValidation();
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
      minorGroup.get('age')?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.reclamationForm.invalid) {
      this.reclamationForm.markAllAsTouched();
      console.log('Formulario no valido:', this.reclamationForm.value);
      return;
    }

    console.log('Formulario enviado:', this.reclamationForm.value);
    // Aquí puedes enviar los datos a tu servicio o API
  }
}
