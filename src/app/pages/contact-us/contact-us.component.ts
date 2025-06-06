import {Component, OnInit} from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import {BannerComponent} from "../../shared/components/general/banner/banner.component";
import {
  ReusableContactFormsComponent
} from '../../shared/components/Important/reusable-contact-forms/reusable-contact-forms.component';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';

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
export class ContactUsComponent implements OnInit{

  constructor(
    private translate: TranslateService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.setTranslatedMeta();

    // Se actualiza automáticamente al cambiar idioma
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedMeta();
    });
  }

  private setTranslatedMeta() {
    this.translate.get(['meta.contact.title', 'meta.contact.description']).subscribe(translations => {
      this.title.setTitle(translations['meta.contact.title']);

      this.meta.updateTag({
        name: 'description',
        content: translations['meta.contact.description']
      });

      // Canonical puede mantenerse fijo si no cambia según idioma
      this.meta.updateTag({
        rel: 'canonical',
        href: 'https://andeanelite.com/contact-us'
      });
    });
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
