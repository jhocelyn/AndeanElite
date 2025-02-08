import { Component } from '@angular/core';
import {NavbarComponent} from '../../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../../shared/components/footer/footer.component';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, TranslatePipe, LazyLoadImageModule],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  destinations = [
    { name: 'Arequipa', img: 'assets/img/destinations/arequipa/arequipa-church.webp', route: '/destination/arequipa/packages' },
    { name: 'Cusco', img: 'assets/img/destinations/cusco/traveling-in-peru.webp', route: '/destination/cusco/packages' },
    { name: 'Puerto Maldonado', img: 'assets/img/home/amazon-jungle.webp', route: '/destination/puerto-maldonado/packages' },
    { name: 'Lima', img: 'assets/img/destinations/lima/scenery-by-the-ocean.webp', route: '/destination/lima/packages' },
    { name: 'Ica', img: 'assets/img/destinations/ica/panoramic-view-of-huacachina.webp', route: '/destination/ica/packages' },
    { name: 'Nazca', img: 'assets/img/destinations/nazca/beautiful-shot-of-nazca.webp', route: '/destination/nazca/packages' }
  ];

}
