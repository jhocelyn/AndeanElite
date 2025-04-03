import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {
  ListPackagesStructureComponent
} from '../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';
@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [
    ListPackagesStructureComponent,
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  TourData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('TRAVEL_BY_INTEREST.FULL_DAY_TOURS').subscribe((data) => {
      this.TourData = data;
    });
  }
}
