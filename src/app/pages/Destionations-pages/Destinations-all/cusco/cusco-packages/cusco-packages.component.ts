import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {BannerComponent} from '../../../../../shared/components/general/banner/banner.component';
@Component({
  selector: 'app-cusco-packages',
  standalone: true,
  imports: [
    BannerComponent,
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
