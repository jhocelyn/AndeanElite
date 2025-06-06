import {Component, OnInit} from '@angular/core';
import {BannerComponent} from '../../../shared/components/general/banner/banner.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {
  InfoGridWaysToTravelComponent
} from '../../../shared/components/general/info-grid-ways-to-travel/info-grid-ways-to-travel.component';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list-services',
  standalone: true,
  imports: [
    BannerComponent,
    TranslatePipe,
    InfoGridWaysToTravelComponent
  ],
  templateUrl: './list-services.component.html',
  styleUrl: './list-services.component.css'
})
export class ListServicesComponent implements OnInit{
  services: any = {}; // Aquí se guardarán los datos traducidos
  servicesKeys: string[] = []; // Claves para iterar en la vista

  constructor(private translate: TranslateService,private title: Title,
              private meta: Meta) {}

  ngOnInit(): void {
    this.loadServices();
    // Escuchar cambios de idioma para actualizar los datos
    this.translate.onLangChange.subscribe(() => {
      this.loadServices();
    });

    this.setTranslatedMeta();

    // Se actualiza automáticamente al cambiar idioma
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedMeta();
    });
  }
  private setTranslatedMeta() {
    this.translate.get(['meta.ways-to-travel.title', 'meta.ways-to-travel.description']).subscribe(translations => {
      this.title.setTitle(translations['meta.ways-to-travel.title']);

      this.meta.updateTag({
        name: 'description',
        content: translations['meta.ways-to-travel.description']
      });

      // Canonical puede mantenerse fijo si no cambia según idioma
      this.meta.updateTag({
        rel: 'canonical',
        href: 'https://andeanelite.com/ways-to-travel'
      });
    });
  }
  loadServices(): void {
    this.translate.get('WAYS_TO_TRAVEL.Services').subscribe((data) => {
      this.services = data;
      this.servicesKeys = Object.keys(this.services);
    });
  }
}
