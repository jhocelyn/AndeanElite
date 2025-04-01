import { Component } from '@angular/core';
import {NavbarComponent} from '../../../shared/components/Important/navbar/navbar.component';
import {FooterComponent} from '../../../shared/components/Important/footer/footer.component';
import {RouterLink} from '@angular/router';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {BannerComponent} from '../../../shared/components/general/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../shared/components/general/destinations-grid/destinations-grid.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [ LazyLoadImageModule, BannerComponent, DestinationsGridComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  destinations = [
    { name: 'Arequipa', image: 'assets/img/destinations/banner-destinations-peru.webp', link: '/destination/arequipa/packages' },
    { name: 'Cusco', image: 'assets/img/destinations/banner-destinations-peru.webp', link: '/destination/cusco/packages' },
    { name: 'Puerto Maldonado', image: 'assets/img/destinations/banner-destinations-peru.webp', link: '/destination/puerto-maldonado/packages' },
    { name: 'Lima', image: 'assets/img/destinations/banner-destinations-peru.webp', link: '/destination/lima/packages' },
    { name: 'Ica', image: 'assets/img/destinations/banner-destinations-peru.webp', link: '/destination/ica/packages' },
    { name: 'Nazca', image: 'assets/img/destinations/banner-destinations-peru.webp', link: '/destination/nazca/packages' }
  ];

}
