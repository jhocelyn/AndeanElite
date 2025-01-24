import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationCardComponent} from '../../../../../shared/components/destination-card/destination-card.component';

@Component({
  selector: 'app-lima-packages',
  standalone: true,
  imports: [
    DestinationCardComponent
  ],
  templateUrl: './lima-packages.component.html',
  styleUrl: './lima-packages.component.css'
})
export class LimaPackagesComponent {
  constructor(private router: Router) {}
  onCardClick(id: number) {
    this.router.navigate([`destination/lima/info/${id}`]); // Redirigir a la ruta dinámica con el ID
  }
}
