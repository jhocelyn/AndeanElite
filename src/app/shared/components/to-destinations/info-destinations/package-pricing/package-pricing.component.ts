import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-package-pricing',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './package-pricing.component.html',
  styleUrl: './package-pricing.component.css'
})
export class PackagePricingComponent {
  @Input() package: any;
}
