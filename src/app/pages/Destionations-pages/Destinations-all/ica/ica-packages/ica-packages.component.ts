import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {BannerComponent} from "../../../../../shared/components/general/banner/banner.component";

@Component({
  selector: 'app-ica-packages',
  standalone: true,
    imports: [
        BannerComponent
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
