import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {BannerComponent} from "../../../../../shared/components/general/banner/banner.component";
import {
  ListPackagesStructureComponent
} from '../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';
import {Subscription} from 'rxjs';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-arequipa-packages',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    ListPackagesStructureComponent
  ],
  templateUrl: './arequipa-packages.component.html',
  styleUrl: './arequipa-packages.component.css'
})
export class ArequipaPackagesComponent implements OnInit,OnDestroy{
  Arequipadata: any;
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
    this.translate.get('DESTINATIONS.AREQUIPA').subscribe((data) => {
      this.Arequipadata = data;
      console.log("Datos de circuitos cargados:", this.Arequipadata);
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

}
