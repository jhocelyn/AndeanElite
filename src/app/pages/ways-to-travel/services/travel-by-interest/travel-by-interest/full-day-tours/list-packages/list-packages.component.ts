import { Component } from '@angular/core';
import {BannerComponent} from '../../../../../../../shared/components/general/banner/banner.component';
import {NgForOf} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [
    BannerComponent,
    NgForOf
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent {
  trekkingData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('TRAVEL_BY_INTEREST.TREKKING').subscribe((data) => {
      this.trekkingData = data;
    });
  }
}
