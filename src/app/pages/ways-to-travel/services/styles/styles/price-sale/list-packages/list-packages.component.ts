import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {
  ListPackagesStructureComponent
} from '../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [
    ListPackagesStructureComponent
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  PriceSaleData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('STYLES.PRICE_SALE').subscribe((data) => {
      this.PriceSaleData = data;
    });
  }
}
