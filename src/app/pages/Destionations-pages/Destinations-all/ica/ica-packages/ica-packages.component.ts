import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationCardComponent} from '../../../../../shared/components/destination-card/destination-card.component';

@Component({
  selector: 'app-ica-packages',
  standalone: true,
  imports: [
    DestinationCardComponent
  ],
  templateUrl: './ica-packages.component.html',
  styleUrl: './ica-packages.component.css'
})
export class IcaPackagesComponent {
  constructor(private router: Router) {}
  onCardClick(id: number) {
    this.router.navigate([`destination/ica/info/${id}`]); // Redirigir a la ruta dinámica con el ID
  }
}
