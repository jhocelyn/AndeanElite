import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationCardComponent} from '../../../../../shared/components/to-destinations/list-packages/destination-card/destination-card.component';

@Component({
  selector: 'app-nazca-packages',
  standalone: true,
  imports: [
    DestinationCardComponent
  ],
  templateUrl: './nazca-packages.component.html',
  styleUrl: './nazca-packages.component.css'
})
export class NazcaPackagesComponent {
  constructor(private router: Router) {}
  onCardClick(id: number) {
    this.router.navigate([`destination/nazca/info/${id}`]); // Redirigir a la ruta dinámica con el ID
  }
}
