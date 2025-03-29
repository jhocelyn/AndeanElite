import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

interface Destination {
  name:string,
  image:string,
  link:string
}

@Component({
  selector: 'app-destinations-grid',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    RouterLink
  ],
  templateUrl: './destinations-grid.component.html',
  styleUrl: './destinations-grid.component.css'
})
export class DestinationsGridComponent {
  @Input() destinations: Destination[] = [];
  @Input() columns: number = 2; // Default: 2 columnas
}
