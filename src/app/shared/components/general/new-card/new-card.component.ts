import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-new-card',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink
  ],
  templateUrl: './new-card.component.html',
  styleUrl: './new-card.component.css'
})
export class NewCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() category!: string;
  @Input() date!: string | Date;
  @Input() slug!: string;
}
