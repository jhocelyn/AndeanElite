import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-info-grid-ways-to-travel',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgForOf
  ],
  templateUrl: './info-grid-ways-to-travel.component.html',
  styleUrl: './info-grid-ways-to-travel.component.css'
})
export class InfoGridWaysToTravelComponent {
  @Input() title!: string; // Título de la sección
  @Input() description!: string; // Título de la sección
  @Input() ruta!: string; // Ruta de la sección
  @Input() servicesKeys!: string[]; // Claves de los servicios
  @Input() services!: { [key: string]: { name: string; image: string; slug: string; featured: boolean } }; // Servicios

}
