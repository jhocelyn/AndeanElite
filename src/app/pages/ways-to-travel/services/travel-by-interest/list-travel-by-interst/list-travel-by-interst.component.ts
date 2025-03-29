import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {
  InfoGridWaysToTravelComponent
} from '../../../../../shared/components/general/info-grid-ways-to-travel/info-grid-ways-to-travel.component';
import {BannerComponent} from '../../../../../shared/components/general/banner/banner.component';

@Component({
  selector: 'app-list-travel-by-interst',
  standalone: true,
  imports: [
    InfoGridWaysToTravelComponent,
    TranslatePipe,
    BannerComponent
  ],
  templateUrl: './list-travel-by-interst.component.html',
  styleUrl: './list-travel-by-interst.component.css'
})
export class ListTravelByInterstComponent {
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
    this.translate.get('TRAVEL_BY_INTEREST.Services').subscribe((data) => {
      this.services = data;
      this.servicesKeys = Object.keys(this.services);
    });
  }
}
