import {Component, EventEmitter, Output} from '@angular/core';
import {PhoneCodeService} from '../../../services/phone-code.service';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-phone-code-selector',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './phone-code-selector.component.html',
  styleUrl: './phone-code-selector.component.css'
})
export class PhoneCodeSelectorComponent {
  phoneCodes: any[] = [];
  selectedPhoneCode: string = '';

  // Define el evento que emitirá el valor seleccionado
  @Output() phoneCodeSelected = new EventEmitter<string>();

  constructor(private phoneCodeService: PhoneCodeService) {}

  ngOnInit(): void {
    this.phoneCodeService.getPhoneCodes().subscribe(
      (data) => {
        this.phoneCodes = data;
      },
      (error) => {
        console.error('Error al cargar los códigos telefónicos:', error);
      }
    );
  }

  onPhoneCodeChange(): void {
    // Emite el código telefónico seleccionado al componente padre
    this.phoneCodeSelected.emit(this.selectedPhoneCode);
  }

}
