import { Component } from '@angular/core';
import {BannerComponent} from '../../../shared/components/general/banner/banner.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {
  InfoGridWaysToTravelComponent
} from '../../../shared/components/general/info-grid-ways-to-travel/info-grid-ways-to-travel.component';

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
export class ListServicesComponent {
  services: any = {}; // Aquí se guardarán los datos traducidos
  servicesKeys: string[] = []; // Claves para iterar en la vista

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadServices();
    // Escuchar cambios de idioma para actualizar los datos
    this.translate.onLangChange.subscribe(() => {
      this.loadServices();
    });
  }

  loadServices(): void {
    this.translate.get('WAYS_TO_TRAVEL.Services').subscribe((data) => {
      this.services = data;
      this.servicesKeys = Object.keys(this.services);
    });
  }
}
