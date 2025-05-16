import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

export interface TourImage {
  src: string;
  alt: string;
  width: number;
}

@Component({
  selector: 'app-tour-banner',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './tour-banner.component.html',
  styleUrl: './tour-banner.component.css'
})

export class TourBannerComponent {
  @Input() title: string = '';
  @Input() rating: number = 0;
  @Input() reviews: number = 0;
  @Input() images:TourImage[] = [];
}
