import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TourBannerComponent } from '../../../../../../../shared/components/tours/tour-banner/tour-banner.component';
import { NgIf} from '@angular/common';
import {
  DetailPackageComponent
} from '../../../../../../../shared/components/tours/detail-package/detail-package.component';
interface ItineraryDay {
  time?: string;
  description: string;
}

interface Pricing {
  shared: {
    ADT: string;
    JR: string;
    CHD: string;
  };
  private: {
    '1 Person': string;
    '2 People': string;
    '3/4 People': string;
    '5 People': string;
    '6 People': string;
    '7 People': string;
    '8 People': string;
  };
}

interface PaymentMethods {
  SafetyPay: string;
  NIUBIS_VISANET: string;
  MercadoPago: string;
}

interface PackageData {
  packageTitle: string;
  itinerary: { [key: string]: ItineraryDay };  // Esto es un objeto con claves dinámicas y valores de tipo ItineraryDay
  duration: string;
  departure: string;
  schedule: string;
  includes: string[];
  notIncluded: string[];
  prices: Pricing;
  notes: {
    paymentMethods: PaymentMethods;
    recommendations: string[];
    childPolicy: {
      CHD: string;
      JR: string;
    };
    bookingConditions: string[];
    cancellationPolicy: string[];
    responsibilities: string[];
  };
}
@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    TourBannerComponent,
    NgIf,
    DetailPackageComponent
  ],
  templateUrl: './info-packages.component.html',
  styleUrls: ['./info-packages.component.css']
})
export class InfoPackagesComponent {
  packageData: PackageData | undefined;

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const packageId = params['id'];
      this.translate.get(`PACKAGES.FULL_DAY_TOURS.${packageId}`).subscribe(data => {
        this.packageData = data;
      });
    });
  }

}
