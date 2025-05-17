import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {PhoneCodeSelectorComponent} from '../../general/phone-code-selector/phone-code-selector.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-reusable-contact-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    PhoneCodeSelectorComponent,
    TranslatePipe
  ],
  templateUrl: './reusable-contact-forms.component.html',
  styleUrl: './reusable-contact-forms.component.css'
})
export class ReusableContactFormsComponent {
  @Input() title: string = '';
  @Output() formSubmitted = new EventEmitter<any>();

  contactForm: FormGroup;
  numero: string = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      travel_agency: ['no', Validators.required],
      hotel_category: [''],
      price: [0],
      destination: ['', Validators.required],
      date_start: ['', Validators.required],
      date_end: ['', Validators.required],
      message: [''],
    });
  }

  onPhoneCodeSelected(phoneCode: string): void {
    this.numero = phoneCode.replace('+', '');
  }

  onSubmit(): void {
    this.contactForm.value.phone = this.numero + ' ' + this.contactForm.value.phone;
    if (this.contactForm.valid) {
      this.formSubmitted.emit(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}
