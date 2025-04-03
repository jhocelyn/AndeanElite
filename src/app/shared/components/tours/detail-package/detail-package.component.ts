import { Component ,Input} from '@angular/core';
import {JsonPipe, KeyValuePipe, NgForOf, NgIf} from "@angular/common";
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
  selector: 'app-detail-package',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgIf,
    JsonPipe
  ],
  templateUrl: './detail-package.component.html',
  styleUrl: './detail-package.component.css'
})
export class DetailPackageComponent {
  @Input()  packageData: PackageData | undefined;
}
