import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-pack-sample-journey',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './pack-sample-journey.component.html',
  styleUrl: './pack-sample-journey.component.css'
})
export class PackSampleJourneyComponent {
  @Input() package: any;
  @Input() alojamientos=true;
}
