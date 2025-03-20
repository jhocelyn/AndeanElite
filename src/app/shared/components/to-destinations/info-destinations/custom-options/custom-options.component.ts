import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-custom-options',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './custom-options.component.html',
  styleUrl: './custom-options.component.css'
})
export class CustomOptionsComponent {
  @Input() package: any;
}
