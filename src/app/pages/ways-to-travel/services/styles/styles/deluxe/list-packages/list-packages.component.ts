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
  DeluxeData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('STYLES.COMFORT').subscribe((data) => {
      this.DeluxeData = data;
    });
  }
}
