import { Component } from '@angular/core';
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
    { name: 'Arequipa', image: 'assets/img/destinations/arequipa/destinations-arequipa-santa-catalina.webp', link: '/destination/arequipa/packages' },
    { name: 'Cusco', image: 'assets/img/destinations/cusco/destinations-machu-picchu.webp', link: '/destination/cusco/packages' },
    { name: 'Puerto Maldonado', image: 'assets/img/destinations/puerto-maldonado/destinations-puerto-maldonado.webp', link: '/destination/puerto-maldonado/packages' },
    { name: 'Lima', image: 'assets/img/destinations/lima/destinations-peru-lima-costa-verde.webp', link: '/destination/lima/packages' },
    { name: 'Ica', image: 'assets/img/destinations/ica/destinations-peru-paracas-ica.webp', link: '/destination/ica/packages' },
    { name: 'Nazca', image: 'assets/img/destinations/nazca/destinations-peru-nasca.webp', link: '/destination/nazca/packages' }
  ];

}
