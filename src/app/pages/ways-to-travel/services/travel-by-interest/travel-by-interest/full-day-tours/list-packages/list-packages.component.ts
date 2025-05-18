import {Component, OnDestroy} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {
  ListPackagesStructureComponent
} from '../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [
    ListPackagesStructureComponent,
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent implements OnDestroy{
  TourData: any;
  private langChangeSubscription: Subscription;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();

    // Se suscribe para actualizar los datos al cambiar idioma
    this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadTrekkingData();
    });
  }

  loadTrekkingData() {
    this.translate.get('TRAVEL_BY_INTEREST.FULL_DAY_TOURS').subscribe((data) => {
      this.TourData = data;
    });
  }

  ngOnDestroy() {
    this.langChangeSubscription.unsubscribe();
  }

}
