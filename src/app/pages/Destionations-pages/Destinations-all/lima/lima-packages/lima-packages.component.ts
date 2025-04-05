import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DestinationCardComponent} from '../../../../../shared/components/to-destinations/list-packages/destination-card/destination-card.component';
import {BannerComponent} from "../../../../../shared/components/general/banner/banner.component";

@Component({
  selector: 'app-lima-packages',
  standalone: true,
    imports: [
        DestinationCardComponent,
        BannerComponent
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
