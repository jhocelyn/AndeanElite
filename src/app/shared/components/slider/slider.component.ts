import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images: string[] = [
    'assets/img/home/Print-MPS-DEST-02.jpg',
    'assets/img/home/hike-in-peru-2023-11-27-05-01-51-utc.jpg',
    'assets/img/home/nazca-lines-hummingbird-2024-08-06-01-13-40-utc.jpg',
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
