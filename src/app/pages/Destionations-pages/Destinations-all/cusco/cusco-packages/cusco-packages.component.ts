import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BannerComponent} from '../../../../../shared/components/general/banner/banner.component';
import {
  ListPackagesStructureComponent
} from '../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';
import {Subscription} from 'rxjs';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-cusco-packages',
  standalone: true,
  imports: [
    ListPackagesStructureComponent,
  ],
  templateUrl: './cusco-packages.component.html',
  styleUrl: './cusco-packages.component.css'
})
export class CuscoPackagesComponent implements OnInit,OnDestroy{
  Cuscodata: any;
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
    this.translate.get('DESTINATIONS.CUSCO').subscribe((data) => {
      this.Cuscodata = data;
      console.log("Datos de circuitos cargados:", this.Cuscodata);
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
