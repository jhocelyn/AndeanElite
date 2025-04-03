import { Component } from '@angular/core';
import {
    ListPackagesStructureComponent
} from "../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component";
import {TranslateService} from '@ngx-translate/core';

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
  ExtensionsData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('TRAVEL_BY_INTEREST.EXTENSIONS').subscribe((data) => {
      this.ExtensionsData = data;
    });
  }

}
