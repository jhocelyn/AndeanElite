import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BannerComponent} from "../../../../../shared/components/general/banner/banner.component";
import {Subscription} from 'rxjs';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {
  ListPackagesStructureComponent
} from '../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';

@Component({
  selector: 'app-ica-packages',
  standalone: true,
  imports: [
    BannerComponent,
    ListPackagesStructureComponent
  ],
  templateUrl: './ica-packages.component.html',
  styleUrl: './ica-packages.component.css'
})
export class IcaPackagesComponent implements OnInit,OnDestroy{
  Icadata: any;
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
    this.translate.get('DESTINATIONS.ICA').subscribe((data) => {
      this.Icadata = data;
      console.log("Datos de circuitos cargados:", this.Icadata);
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
