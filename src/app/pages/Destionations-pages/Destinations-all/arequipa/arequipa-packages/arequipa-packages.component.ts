import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationCardComponent } from '../../../../../shared/components/destination-card/destination-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-arequipa-packages',
  standalone: true,
  imports: [
    CommonModule,
    DestinationCardComponent
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
