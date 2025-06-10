import { Component, OnInit, Inject, PLATFORM_ID ,AfterViewInit} from '@angular/core';
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
export class SliderComponent implements OnInit, AfterViewInit {
  images= [
    {src:'assets/img/destinations/cusco/machu-picchu-huayna-picchu-peak.webp',
    placeholder: 'assets/img/destinations/cusco/machu-picchu-huayna-picchu-peak-tiny.webp',
    preload: true,
    loaded: false},
    {
      src:'assets/img/destinations/cusco/seven-colors-mountain-peru.webp',
      placeholder: 'assets/img/destinations/cusco/seven-colors-mountain-peru-tiny.webp',
      preload: true,
    loaded: false},
    {src:'assets/img/home/hike-in-peru.webp',
    placeholder: 'assets/img/home/hike-in-peru-tiny.webp',
    preload: true,
    loaded: false},
    {src:'assets/img/home/banner/Moray.jpg',
    placeholder: 'assets/img/home/banner/Moray.jpg',
    preload: true,
    loaded: false},
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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Carga agresiva de la primera imagen
      const img = new Image();
      img.src = this.images[0].src;
      img.onload = () => {
        this.images[0].loaded = true;
      };
    }
  }
}
