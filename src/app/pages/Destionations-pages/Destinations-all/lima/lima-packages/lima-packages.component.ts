import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DestinationCardComponent} from '../../../../../shared/components/to-destinations/list-packages/destination-card/destination-card.component';
import {BannerComponent} from "../../../../../shared/components/general/banner/banner.component";
import {
  ListPackagesStructureComponent
} from '../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';
import {Subscription} from 'rxjs';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-lima-packages',
  standalone: true,
  imports: [
    ListPackagesStructureComponent
  ],
  templateUrl: './lima-packages.component.html',
  styleUrl: './lima-packages.component.css'
})
export class LimaPackagesComponent  implements OnInit,OnDestroy{
  Limadata: any;
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
    this.translate.get('DESTINATIONS.LIMA').subscribe((data) => {
      this.Limadata = data;
      console.log("Datos de circuitos cargados:", this.Limadata);
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
