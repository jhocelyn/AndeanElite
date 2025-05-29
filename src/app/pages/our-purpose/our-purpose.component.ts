import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {BannerComponent} from '../../shared/components/general/banner/banner.component';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-our-purpose',
  standalone: true,
  imports: [
    NgIf,
    BannerComponent,
    TranslatePipe,
    NgForOf,
    RouterLink
  ],
  templateUrl: './our-purpose.component.html',
  styleUrl: './our-purpose.component.css'
})
export class OurPurposeComponent {

}
