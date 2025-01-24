import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() title: string = 'Galería de Imágenes';
  @Input() images: { url: string; title: string; description: string }[] = [];

  currentIndex: number = 0; // Índice actual
  visibleImages: { url: string; title: string; description: string }[] = []; // Imágenes visibles

  ngOnInit() {
    this.updateVisibleImages();
  }

  // Actualiza las imágenes visibles
  updateVisibleImages() {
    const start = this.currentIndex;
    const end = start + 3;
    this.visibleImages = this.images.slice(start, end);

    // Si hay menos de 3 imágenes restantes, agrega al inicio (loop circular)
    if (this.visibleImages.length < 3) {
      this.visibleImages = [
        ...this.visibleImages,
        ...this.images.slice(0, 3 - this.visibleImages.length),
      ];
    }
  }

  // Mover al siguiente conjunto de imágenes
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateVisibleImages();
  }

  // Mover al conjunto anterior de imágenes
  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateVisibleImages();
  }
}
