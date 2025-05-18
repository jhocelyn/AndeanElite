import {Component, OnDestroy, OnInit} from '@angular/core';
import {
    ListPackagesStructureComponent
} from "../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component";
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list-packages',
  standalone: true,
    imports: [
        ListPackagesStructureComponent
    ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent implements OnInit, OnDestroy{
  CircuitsData: any;
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
    this.translate.get('TRAVEL_BY_INTEREST.CIRCUITS').subscribe((data) => {
      this.CircuitsData = data;
      console.log("Datos de circuitos cargados:", this.CircuitsData);
    });
  }

  ngOnDestroy() {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
