import { Component } from '@angular/core';
import {DestinationCardComponent} from '../../../../../shared/components/destination-card/destination-card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-arequipa-packages',
  standalone: true,
  imports: [
    DestinationCardComponent
  ],
  templateUrl: './arequipa-packages.component.html',
  styleUrl: './arequipa-packages.component.css'
})
export class ArequipaPackagesComponent {
  constructor(private router: Router) {}

  onCardClick(id: number) {
    this.router.navigate([`destination/arequipa/info/${id}`]); // Redirigir a la ruta dinámica con el ID
  }
}
