import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgForOf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  imports: [
    NgStyle,
    NgForOf
  ]
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input() images: { url: string; title: string; description: string }[] = [];

  currentIndex: number = 0;
  imagesPerView: number = 1; // Mobile: 1 imagen
  resizeListener: any; // Para eliminar el event listener cuando el componente se destruye

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
      this.resizeListener = () => this.checkScreenSize();
      window.addEventListener('resize', this.resizeListener);
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined' && this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  checkScreenSize() {
    if (typeof window !== 'undefined') {
      this.imagesPerView = window.innerWidth >= 640 ? 3 : 1;
    }
  }

  nextCard() {
    if (this.currentIndex < this.images.length - this.imagesPerView) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Reinicia al inicio si está en la última tarjeta
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  getTranslateValue(): string {
    return `translateX(-${(this.currentIndex * 100) / this.imagesPerView}%)`;
  }
}
