import {Component, OnDestroy, OnInit} from '@angular/core';
import {BannerComponent} from "../../../../../shared/components/general/banner/banner.component";
import {
  ListPackagesStructureComponent
} from '../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';
import {Subscription} from 'rxjs';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-puerto-maldonado-packages',
  standalone: true,
  imports: [
    BannerComponent,
    ListPackagesStructureComponent
  ],
  templateUrl: './puerto-maldonado-packages.component.html',
  styleUrl: './puerto-maldonado-packages.component.css'
})
export class PuertoMaldonadoPackagesComponent  implements OnInit, OnDestroy{
  PuertoMaldonadodata: any;
  private langSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadCircuitsData();

    // Suscribirse a cambios de idioma
    this.langSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadCircuitsData();
    });
  }

  loadCircuitsData() {
    this.translate.get('DESTINATIONS.NAZCA').subscribe((data) => {
      this.PuertoMaldonadodata = data;
      console.log("Datos de circuitos cargados:", this.PuertoMaldonadodata);
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
