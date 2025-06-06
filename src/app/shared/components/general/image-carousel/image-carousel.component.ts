import {Component, Input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [
    NgForOf,
    LazyLoadImageModule
  ],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  prevImage() {
    this.currentIndex =
      this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
  }

  nextImage() {
    this.currentIndex =
      this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
  }

  setImage(index: number) {
    this.currentIndex = index;
  }
}
