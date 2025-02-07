import { Component } from '@angular/core';
import {NavbarComponent} from '../../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../../shared/components/footer/footer.component';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, TranslatePipe, LazyLoadImageModule, NgOptimizedImage],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

}
