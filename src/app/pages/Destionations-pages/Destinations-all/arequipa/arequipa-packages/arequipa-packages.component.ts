import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {BannerComponent} from "../../../../../shared/components/general/banner/banner.component";

@Component({
  selector: 'app-arequipa-packages',
  standalone: true,
    imports: [
        CommonModule,
        BannerComponent
    ],
  templateUrl: './arequipa-packages.component.html',
  styleUrl: './arequipa-packages.component.css'
})
export class ArequipaPackagesComponent {
  constructor(private router: Router) {}

  onCardClick(id: number) {
    if (!id && id !== 0) {
      console.error('ID inválido:', id);
      return;
    }
    console.log('ID enviado:', id);
    this.router.navigate([`destination/arequipa/info/${id}`]);
  }

}
