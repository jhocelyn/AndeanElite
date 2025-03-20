import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-package-over-view',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './package-over-view.component.html',
  styleUrl: './package-over-view.component.css'
})
export class PackageOverViewComponent {
  @Input() package: any;
}
