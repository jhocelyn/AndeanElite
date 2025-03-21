import { Component } from '@angular/core';
import {NavbarComponent} from '../../../shared/components/Important/navbar/navbar.component';
import {FooterComponent} from '../../../shared/components/Important/footer/footer.component';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {BannerComponent} from '../../../shared/components/general/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../shared/components/general/destinations-grid/destinations-grid.component';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, LazyLoadImageModule, BannerComponent, DestinationsGridComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  destinations = [
    { name: 'Arequipa', image: 'assets/img/destinations/arequipa/arequipa-church.webp', link: '/destination/arequipa/packages' },
    { name: 'Cusco', image: 'assets/img/destinations/cusco/traveling-in-peru.webp', link: '/destination/cusco/packages' },
    { name: 'Puerto Maldonado', image: 'assets/img/home/amazon-jungle.webp', link: '/destination/puerto-maldonado/packages' },
    { name: 'Lima', image: 'assets/img/destinations/lima/scenery-by-the-ocean.webp', link: '/destination/lima/packages' },
    { name: 'Ica', image: 'assets/img/destinations/ica/panoramic-view-of-huacachina.webp', link: '/destination/ica/packages' },
    { name: 'Nazca', image: 'assets/img/destinations/nazca/beautiful-shot-of-nazca.webp', link: '/destination/nazca/packages' }
  ];

}
