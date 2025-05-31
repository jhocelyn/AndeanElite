import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PhoneCodeService} from '../../../../services/phone-code.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-phone-code-selector',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    TranslatePipe,
    NgIf
  ],
  templateUrl: './phone-code-selector.component.html',
  styleUrl: './phone-code-selector.component.css'
})
export class PhoneCodeSelectorComponent implements OnInit{
  phoneCodes: any[] = [];

  // Define el evento que emitirá el valor seleccionado
  @Output() phoneCodeSelected = new EventEmitter<string>();

  constructor(private phoneCodeService: PhoneCodeService,   private translate: TranslateService
  ) {}
  currentLang: string = 'en';

  searchTerm: string = '';
  filteredPhoneCodes: any[] = [];
  showDropdown: boolean = false;

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();

    this.translate.onLangChange.subscribe(event => {
      this.currentLang = event.lang;
    });

    this.phoneCodeService.getPhoneCodes().subscribe(
      (data) => {
        this.phoneCodes = data;
        this.filteredPhoneCodes = data;
      },
      (error) => {
        console.error('Error al cargar los códigos telefónicos:', error);
      }
    );
  }


  filterCountries(): void {
    const term = this.searchTerm.toLowerCase();
    const langField = this.currentLang === 'es' ? 'nameES' : 'nameEN';

    this.filteredPhoneCodes = this.phoneCodes.filter(country =>
      country[langField].toLowerCase().includes(term) ||
      country.phoneCode.includes(term)
    );
  }

  selectCountry(country: any): void {
    const langField = this.currentLang === 'es' ? 'nameES' : 'nameEN';
    this.searchTerm = `${country.flagEmoji} ${country[langField]} (${country.phoneCode})`;
    this.phoneCodeSelected.emit(country.phoneCode);
    this.showDropdown = false;
  }


  hideDropdown(): void {
    // Esperar un momento para permitir que (mousedown) se ejecute
    setTimeout(() => {
      this.showDropdown = false;
    }, 200);
  }

}
