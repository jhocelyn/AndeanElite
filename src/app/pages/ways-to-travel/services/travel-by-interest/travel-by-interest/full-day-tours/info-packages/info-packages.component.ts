import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TourBannerComponent } from '../../../../../../../shared/components/tours/tour-banner/tour-banner.component';
import {KeyValuePipe, NgForOf, NgIf, TitleCasePipe} from '@angular/common';
interface ItineraryDay {
  time?: string;
  description: string;
}

interface Pricing {
  shared: {
    ADT: number;
    JR: number;
    CHD: number;
  };
  private: {
    '1 Person': number;
    '2 People': number;
    '3/4 People': number;
    '5 People': number;
    '6 People': number;
    '7 People': number;
    '8 People': number;
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
    NgForOf,
    KeyValuePipe,
    TitleCasePipe,
    NgIf
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
