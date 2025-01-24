import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-destination-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.css'
})
export class DestinationCardComponent {
  @Input() title!: string;
  @Input() price!: number;
  @Input() originalPrice!: number;
  @Input() discount!: number;
  @Input() days!: string;
  @Input() imageUrl!: string;
  @Output() cardClick = new EventEmitter<void>();
  @Input() destinationBase: string = 'destination/arequipa';
  constructor(private router: Router) {}

  onCardClick() {
    const formattedTitle = this.title.replace(/ /g, '-').toLowerCase();
    this.router.navigate([`${this.destinationBase}/info/${formattedTitle}`]);
  }

}
