import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationCardComponent} from '../../../../../shared/components/destination-card/destination-card.component';

@Component({
  selector: 'app-cusco-packages',
  standalone: true,
  imports: [
    DestinationCardComponent
  ],
  templateUrl: './cusco-packages.component.html',
  styleUrl: './cusco-packages.component.css'
})
export class CuscoPackagesComponent {
  constructor(private router: Router) {}


  onCardClick(id: number) {
    this.router.navigate([`destination/cusco/info/${id}`]); // Redirigir a la ruta dinámica con el ID
  }
}
