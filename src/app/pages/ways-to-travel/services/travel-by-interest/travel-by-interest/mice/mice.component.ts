import { Component } from '@angular/core';
import {
    ListPackagesStructureComponent
} from "../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-mice',
  standalone: true,
    imports: [
        ListPackagesStructureComponent
    ],
  templateUrl: './mice.component.html',
  styleUrl: './mice.component.css'
})
export class MiceComponent {
  MiceData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('TRAVEL_BY_INTEREST.MICE').subscribe((data) => {
      this.MiceData = data;
    });
  }
}
