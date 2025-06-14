import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, switchMap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {
  DetailCircuitsPackageComponent
} from '../../../../../../../shared/components/circuits/detail-circuits-package/detail-circuits-package.component';
import {NgIf} from '@angular/common';
import {TourBannerComponent} from '../../../../../../../shared/components/tours/tour-banner/tour-banner.component';
import {SuperDealsPackageModel} from '../../../../../../../shared/models/SuperDealsPackage.model';
import {
  DetailStylesPackageComponent
} from '../../../../../../../shared/components/styles/detail-styles-package/detail-styles-package.component';

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    NgIf,
    TourBannerComponent,
    TranslatePipe,
    DetailStylesPackageComponent
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent implements OnInit,OnDestroy{
  packageData: SuperDealsPackageModel | undefined;
  private subscriptions = new Subscription();

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit() {
    // Cuando cambien los parámetros o el idioma, recarga el paquete
    this.subscriptions.add(
      this.route.params.pipe(
        switchMap(params => {
          const packageId = params['id'];
          return this.translate.get(`PACKAGES.SUPER_DEALS.${packageId}`);
        })
      ).subscribe({
        next: (data: SuperDealsPackageModel) => {
          if (data) {
            this.packageData = data;
            console.log(this.packageData);
          } else {
            console.error('Paquete no encontrado');
          }
        },
        error: err => console.error('Error al cargar paquete:', err)
      })
    );

    // También escucha el cambio de idioma para refrescar datos
    this.subscriptions.add(
      this.translate.onLangChange.subscribe(() => {
        if (this.packageData?.id) {
          this.translate.get(`PACKAGES.SUPER_DEALS.${this.packageData.id}`).subscribe(data => {
            this.packageData = data;
          });
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
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
