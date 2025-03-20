import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AsyncPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {BookingFormComponent} from '../../../../../shared/components/booking-form/booking-form.component';
import {BannerComponent} from '../../../../../shared/components/to-destinations/info-destinations/banner/banner.component';
import {
  PackageOverViewComponent
} from '../../../../../shared/components/to-destinations/info-destinations/package-over-view/package-over-view.component';
import {Observable} from 'rxjs';
import {TravelPackage} from '../../../../../shared/models/TravelPackage.model';
import {PackagesService} from '../../../../../services/packages.service';
import {
  PackageDescriptionComponent
} from '../../../../../shared/components/to-destinations/info-destinations/package-description/package-description.component';
import {
  PackSampleJourneyComponent
} from '../../../../../shared/components/to-destinations/info-destinations/pack-sample-journey/pack-sample-journey.component';
import {
  CustomOptionsComponent
} from '../../../../../shared/components/to-destinations/info-destinations/custom-options/custom-options.component';
import {
  PackagePricingComponent
} from '../../../../../shared/components/to-destinations/info-destinations/package-pricing/package-pricing.component';

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [NgIf, BookingFormComponent, NgForOf, BannerComponent, PackageOverViewComponent, AsyncPipe, PackageDescriptionComponent, PackSampleJourneyComponent, CustomOptionsComponent, PackagePricingComponent, NgSwitchCase, NgSwitch],
  templateUrl: './info-packages.component.html',
  styleUrls: ['./info-packages.component.css'],
})
export class InfoPackagesComponent implements OnInit {
  selectedTab = 'description'; // Por defecto, se muestra la descripción

  tabs = [
    { id: 'description', label: 'DESCRIPCIÓN', icon: 'fas fa-file-alt' },
    { id: 'sample-journey', label: 'SAMPLE JOURNEY', icon: 'fas fa-map-marked-alt' },
    { id: 'custom-options', label: 'OPCIONES A MEDIDA', icon: 'fas fa-plus' },
    { id: 'pricing', label: 'PRECIOS', icon: 'fas fa-tags' },
    { id: 'request-program', label: 'REQUEST THE PROGRAM', icon: 'fas fa-envelope' } // Nueva pestaña
  ];
  package$!: Observable<TravelPackage | undefined>; // Ahora es un Observable

  constructor(
    private route: ActivatedRoute,
    private packagesService: PackagesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const category = 'AREQUIPA'; // Puedes cambiarlo dinámicamente si es necesario
      const id = +params['id'];

      console.log('Categoría seleccionada:', category);
      console.log('ID del paquete:', id);

      this.package$ = this.packagesService.getPackageById(category, id);
      console.log('',this.package$)

    });
  }
}
