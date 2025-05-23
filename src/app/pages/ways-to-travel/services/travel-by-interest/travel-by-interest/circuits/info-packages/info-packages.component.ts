import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {
  DetailToursPackageComponent
} from '../../../../../../../shared/components/tours/detail-tours-package/detail-tours-package.component';
import {NgIf} from '@angular/common';
import {TourBannerComponent} from '../../../../../../../shared/components/tours/tour-banner/tour-banner.component';
import {
  DetailCircuitsPackageComponent
} from '../../../../../../../shared/components/circuits/detail-circuits-package/detail-circuits-package.component';
import {Subscription, switchMap} from 'rxjs';
import {CircuitsPackageModel} from '../../../../../../../shared/models/CircuitsPackage.model';


@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    NgIf,
    TourBannerComponent,
    DetailCircuitsPackageComponent,
    TranslatePipe
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent implements OnInit{
  packageData: CircuitsPackageModel | undefined;
  private subscriptions = new Subscription();

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit() {
    // Cuando cambien los parámetros o el idioma, recarga el paquete
    this.subscriptions.add(
      this.route.params.pipe(
        switchMap(params => {
          const packageId = params['id'];
          return this.translate.get(`PACKAGES.CIRCUITS.${packageId}`);
        })
      ).subscribe({
        next: (data: CircuitsPackageModel) => {
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
          this.translate.get(`PACKAGES.CIRCUITS.${this.packageData.id}`).subscribe(data => {
            this.packageData = data;
          });
        }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
