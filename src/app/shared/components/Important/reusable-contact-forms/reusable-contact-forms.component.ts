import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {PhoneCodeSelectorComponent} from '../../general/phone-code-selector/phone-code-selector.component';
import {TranslatePipe} from '@ngx-translate/core';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reusable-contact-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    PhoneCodeSelectorComponent,
    NgxDaterangepickerMd,
    TranslatePipe,
    NgbDatepicker,
    FormsModule
  ],
  templateUrl: './reusable-contact-forms.component.html',
  styleUrl: './reusable-contact-forms.component.css'
})
export class ReusableContactFormsComponent {
  @Input() title: string = '';
  @Output() formSubmitted = new EventEmitter<any>();

  contactForm: FormGroup;
  numero: string = '';
  modelStart: { year: number; month: number; day: number } | null = null;
  showDatepickerStart = false;
  modelEnd: { year: number; month: number; day: number } | null = null;
  showDatepickerEnd = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      travel_agency: ['no', Validators.required],
      hotel_category: ['0'],
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
      destination: ['', Validators.required],
      date_start: [null, Validators.required],
      date_end: [null, Validators.required],
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

  //Fechas

  get formattedDateStart(): string {
    if (!this.modelStart) return '';
    const { year, month, day } = this.modelStart;
    const d = day.toString().padStart(2, '0');
    const m = month.toString().padStart(2, '0');
    return `${d}/${m}/${year}`;
  }

  toggleDatepickerStart() {
    this.showDatepickerStart = !this.showDatepickerStart;
    if (this.showDatepickerStart) {
      this.showDatepickerEnd = false;
    }
  }

  toggleDatepickerEnd() {
    this.showDatepickerEnd = !this.showDatepickerEnd;
    if (this.showDatepickerEnd) {
      this.showDatepickerStart = false;
    }
  }


  onDateStartSelect(date: { year: number; month: number; day: number }) {
    this.modelStart = date;
    this.showDatepickerStart = false;
    this.contactForm.get('date_start')?.setValue(new Date(date.year, date.month - 1, date.day));
  }


  // Fecha formateada para mostrar en input date_end
  get formattedDateEnd(): string {
    if (!this.modelEnd) return '';
    const { year, month, day } = this.modelEnd;
    const d = day.toString().padStart(2, '0');
    const m = month.toString().padStart(2, '0');
    return `${d}/${m}/${year}`;
  }


  onDateEndSelect(date: { year: number; month: number; day: number }) {
    this.modelEnd = date;
    this.showDatepickerEnd = false;
    this.contactForm.get('date_end')?.setValue(new Date(date.year, date.month - 1, date.day));
  }
}
