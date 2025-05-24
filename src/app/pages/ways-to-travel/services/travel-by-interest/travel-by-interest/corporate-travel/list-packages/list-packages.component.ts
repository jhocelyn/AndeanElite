import { Component } from '@angular/core';
import {
    ListPackagesStructureComponent
} from "../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component";
import {TranslateService} from '@ngx-translate/core';
import {BannerComponent} from '../../../../../../../shared/components/general/banner/banner.component';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [
    BannerComponent
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  CorporateData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('TRAVEL_BY_INTEREST.CORPORATE_TRAVEL').subscribe((data) => {
      this.CorporateData = data;
    });
  }

}
