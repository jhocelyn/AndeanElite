import {Component, Input} from '@angular/core';
import {BookingFormService} from '../../../../services/booking-form.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {PhoneCodeSelectorComponent} from '../phone-code-selector/phone-code-selector.component';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule, NgIf, PhoneCodeSelectorComponent
  ],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() days!: number;

  bookingForm: FormGroup;
 numero:string='';
  constructor(
    private fb: FormBuilder,
    private bookingFormService: BookingFormService
  ) {
    this.bookingForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$'),
        ],
      ],
      phone: [
        '',
          Validators.required
      ],
      email: ['', [Validators.required, Validators.email]],
      date_start: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }
  onPhoneCodeSelected(phoneCode: string): void {
    this.numero = phoneCode.replace('+', ''); // Elimina el '+' del código telefónico
    console.log('Código telefónico seleccionado:', this.numero);
  }
  onSubmit() {
    if (this.bookingForm.valid) {
      const formData = {
        package: this.title,
        price: this.price,
        days: this.days,
        ...this.bookingForm.value, // Combina el formulario reactivo con el resto de los datos
      };

      this.bookingFormService.sendFormData(formData).subscribe({
        next: (response) => {
          console.log('Datos enviados correctamente:', response);
          alert('Formulario enviado correctamente.');
          this.bookingForm.reset(); // Limpiar el formulario
        },
        error: (error) => {
          console.error('Error al enviar los datos:', error);
          alert('Ocurrió un error al enviar el formulario.');
        },
      });
    } else {
      alert('Por favor completa todos los campos requeridos.');
    }
  }
}
