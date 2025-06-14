import {Component, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import { TourBannerComponent } from '../../../../../../../shared/components/tours/tour-banner/tour-banner.component';
import { NgIf} from '@angular/common';
import {
  DetailToursPackageComponent
} from '../../../../../../../shared/components/tours/detail-tours-package/detail-tours-package.component';
import {Subscription} from 'rxjs';
import {TravelPackageModel} from '../../../../../../../shared/models/TravelPackage.model';

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    TourBannerComponent,
    NgIf,
    DetailToursPackageComponent,
    TranslatePipe
  ],
  templateUrl: './info-packages.component.html',
  styleUrls: ['./info-packages.component.css']
})
export class InfoPackagesComponent implements OnDestroy{
  packageData: TravelPackageModel | undefined;
  private subscription: Subscription | undefined;
  packageId: string | undefined;

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.packageId = params['id'];
      this.loadPackageData();
    });

    // Para que cambie cuando cambie el idioma
    this.subscription = this.translate.onLangChange.subscribe(() => {
      this.loadPackageData();
    });
  }

  loadPackageData() {
    if (!this.packageId) return;

    this.translate.get(`PACKAGES.FULL_DAY_TOURS.${this.packageId}`).subscribe(data => {
      this.packageData = data as TravelPackageModel;
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  goToWhatsApp(): void {
    if (!this.packageData) return;
    const lang = this.translate.currentLang;
    const phone = '51950194035'; // reemplaza con tu número real (sin espacios ni símbolos)
    const message = lang === 'en'
      ? `Hi! I'm interested in the travel package: ${this.packageData.title}`
      : `Hola, quiero información sobre el paquete: ${this.packageData.title}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
}
