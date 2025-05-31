import {Component, OnDestroy} from '@angular/core';

import {LangChangeEvent, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from '../../../../../../shared/components/general/banner/banner.component';
import {Subscription} from 'rxjs';
import {ContactUsComponent} from '../../../../../contact-us/contact-us.component';
import {
  ReusableContactFormsComponent
} from '../../../../../../shared/components/Important/reusable-contact-forms/reusable-contact-forms.component';

@Component({
  selector: 'app-mice',
  standalone: true,
  imports: [
    BannerComponent,
    ReusableContactFormsComponent,
    TranslatePipe
  ],
  templateUrl: './mice.component.html',
  styleUrl: './mice.component.css'
})
export class MiceComponent  implements OnDestroy{
  MiceData: any = {};
  private langSubscription: Subscription;

  constructor(private translate: TranslateService) {
    this.loadMiceData();

    // Suscribirse a los cambios de idioma
    this.langSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadMiceData();
    });
  }

  loadMiceData() {
    this.translate.get('TRAVEL_BY_INTEREST.MICE').subscribe((data) => {
      this.MiceData = data;
    });
  }

  ngOnDestroy() {
    // Limpia la suscripción para evitar fugas de memoria
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
  handleFormSubmit(formData: any) {
    const url = 'https://script.google.com/macros/s/AKfycbwQ6clI6kJl3HRLlGN6oAz22TS1ZMU29M84nP14i4S1pCjdtOMd-a7yPFTSfcvg5rOv/exec';
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
