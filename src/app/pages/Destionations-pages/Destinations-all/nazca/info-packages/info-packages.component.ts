import { Component } from '@angular/core';
import {BookingFormComponent} from '../../../../../shared/components/general/booking-form/booking-form.component';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ImageCarouselComponent} from '../../../../../shared/components/general/image-carousel/image-carousel.component';

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    BookingFormComponent,
    NgForOf,
    NgIf,
    ImageCarouselComponent
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent {
  packageInfo: any;
  destinations_nazca=[
  ]
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idOrName = this.route.snapshot.paramMap.get('id')!;
  }
  calculateDays(itinerary: any[]) {
    return itinerary.reduce((acc: number, curr: any) => {
      return acc + (curr.day && typeof curr.day === 'string' && curr.day.includes('DIA') ? 1 : 0);
    }, 0);
  }
}
