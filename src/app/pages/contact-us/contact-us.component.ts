import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {PhoneCodeSelectorComponent} from '../../shared/components/general/phone-code-selector/phone-code-selector.component';
import {BannerComponent} from "../../shared/components/general/banner/banner.component";
import {TranslatePipe} from '@ngx-translate/core';
import {
  ReusableContactFormsComponent
} from '../../shared/components/Important/reusable-contact-forms/reusable-contact-forms.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    BannerComponent,
    ReusableContactFormsComponent
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  numero:string='';
  constructor(private fb: FormBuilder) {
    // Configura el formulario con los campos
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

  handleFormSubmit(formData: any) {
    formData.phone = this.numero + ' ' + formData.phone;

    const url = 'https://script.google.com/macros/s/AKfycbyHD2kfTp0mksS3tr2JAAWLyBMlHQT2WviphZ3zKDArVeGdT0W2xBqe4VmIblAq0sPbmg/exec';
    const headers = {
      'Content-Type': 'text/plain;charset=utf-8'
    };

    fetch(url, {
      redirect: 'follow',
      method: 'POST',
      headers: headers,
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Datos enviados correctamente:', data);
        alert('Formulario enviado correctamente.');
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert('Ocurrió un error al enviar el formulario.');
      });
  }
}
