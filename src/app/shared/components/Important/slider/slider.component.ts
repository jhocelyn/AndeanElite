import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgForOf } from '@angular/common';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgForOf, LazyLoadImageModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
//'assets/img/destinations/cusco/machu-picchu-huayna-picchu-peak.webp',
export class SliderComponent implements OnInit {
  images: string[] = [
    'assets/img/home/hike-in-peru-2023-11-27-05-01-51-utc.webp',
    'assets/img/destinations/cusco/machu-picchu-inca-view.webp',
    'assets/img/destinations/cusco/machu-picchu-huayna-picchu-peak.webp',
    'assets/img/home/banner/Moray.webp',
  ];
  currentImageIndex: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoSlide();
    }
  }

  startAutoSlide(): void {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 5000); // Cambia la imagen cada 5 segundos
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }
}
