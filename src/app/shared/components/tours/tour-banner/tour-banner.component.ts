import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tour-banner',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './tour-banner.component.html',
  styleUrl: './tour-banner.component.css'
})
export class TourBannerComponent {
  @Input() title: string = '';
  @Input() rating: number = 0;
  @Input() reviews: number = 0;
  @Input() images: string[] = [];
}
