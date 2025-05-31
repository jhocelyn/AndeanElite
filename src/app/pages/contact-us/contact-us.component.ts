import { Component } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import {BannerComponent} from "../../shared/components/general/banner/banner.component";
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

  handleFormSubmit(formData: any) {
    const url = 'https://script.google.com/macros/s/AKfycbw1xAvA17yZwDYxskby27uvVwEqD5gAubPLrglxjhBofqaTgjPLCpKNP1sB6OjfC7pa/exec';
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
