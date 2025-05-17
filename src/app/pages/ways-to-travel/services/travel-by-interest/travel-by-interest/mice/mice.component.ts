import {Component, OnDestroy} from '@angular/core';

import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from '../../../../../../shared/components/general/banner/banner.component';
import {Subscription} from 'rxjs';
import {ContactUsComponent} from '../../../../../contact-us/contact-us.component';
import {
  ReusableContactFormsComponent
} from '../../../../../../shared/components/Important/reusable-contact-forms/reusable-contact-forms.component';

@Component({
  selector: 'app-mice',
  standalone: true,
  imports: [
    BannerComponent,
    ContactUsComponent,
    ReusableContactFormsComponent
  ],
  templateUrl: './mice.component.html',
  styleUrl: './mice.component.css'
})
export class MiceComponent  implements OnDestroy{
  MiceData: any = {};
  private langSubscription: Subscription;

  constructor(private translate: TranslateService) {
    this.loadMiceData();

    // Suscribirse a los cambios de idioma
    this.langSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadMiceData();
    });
  }

  loadMiceData() {
    this.translate.get('TRAVEL_BY_INTEREST.MICE').subscribe((data) => {
      this.MiceData = data;
    });
  }

  ngOnDestroy() {
    // Limpia la suscripción para evitar fugas de memoria
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
