import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {
  ListPackagesStructureComponent
} from '../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';

@Component({
  selector: 'app-taylor-made',
  standalone: true,
  imports: [
    ListPackagesStructureComponent
  ],
  templateUrl: './taylor-made.component.html',
  styleUrl: './taylor-made.component.css'
})
export class TaylorMadeComponent {
  TaylorMadeData: any;

  constructor(private translate: TranslateService) {
    this.loadTrekkingData();
  }

  loadTrekkingData() {
    this.translate.get('TRAVEL_BY_INTEREST.TAYLOR_MADE').subscribe((data) => {
      this.TaylorMadeData = data;
    });
  }
}
