import { Component } from '@angular/core';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {BannerComponent} from '../../../shared/components/general/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../shared/components/general/destinations-grid/destinations-grid.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [LazyLoadImageModule, BannerComponent, DestinationsGridComponent, TranslatePipe, NgForOf, RouterLink, NgIf, NgClass],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

  //Array of destinations
  regions = [
    {
      key: 'DESTINATIONS.RELEVANT',
      title: 'DESTINATIONS.RELEVANT.TITLE',
      description: 'DESTINATIONS.RELEVANT.DESCRIPTION',
      list: 'DESTINATIONS.RELEVANT.HIGHLIGHTS',
      reverse:false,
      alt: 'Imagen de gastronomía',
      images: [
        'assets/img/ways-to-travel/travel-by-interest/tours/gastronomia-clase-peru.webp',
        'assets/img/destinations/cusco/machu-picchu-inca-citadel-peru.webp'
      ]
    },
    {
      key: 'DESTINATIONS.COAST',
      title: 'DESTINATIONS.COAST.TITLE',
      description: 'DESTINATIONS.COAST.DESCRIPTION',
      list: 'DESTINATIONS.COAST.LIST',
      reverse:true,
      alt: 'Imagen de la costa',
      images: [
        'assets/img/destinations/lima/caral-supe.webp',
        'assets/img/destinations/ica/huacachina-desert-oasis.webp'
      ]
    },
    {
      key: 'DESTINATIONS.ANDES',
      title: 'DESTINATIONS.ANDES.TITLE',
      description: 'DESTINATIONS.ANDES.DESCRIPTION',
      list: 'DESTINATIONS.ANDES.LIST',
      alt: 'Imagen de los Andes',
      reverse:false,
      images: [
        'assets/img/destinations/cusco/machu-picchu-overlook-view.webp',
        'assets/img/destinations/puno/lake-titicaca-natural-landscape.webp'
      ]
    },
    {
      key: 'DESTINATIONS.AMAZON',
      title: 'DESTINATIONS.AMAZON.TITLE',
      description: 'DESTINATIONS.AMAZON.DESCRIPTION',
      list: 'DESTINATIONS.AMAZON.LIST',
      alt: 'Imagen de la selva',
      reverse:true,
      images: [
        'assets/img/destinations/puerto-maldonado/abiseo-river-national-park.webp',
        'assets/img/destinations/puerto-maldonado/iquitos-amazing-jungle.webp'
      ]
    }
  ];




  /*destinations = [
    { name: 'Cusco', image: 'assets/img/destinations/cusco/machu-picchu-inca-view.webp', link: '/destination/cusco/packages' },
    { name: 'Puerto Maldonado', image: 'assets/img/destinations/puerto-maldonado/destinations-puerto-maldonado.webp', link: '/destination/puerto-maldonado/packages' },
    { name: 'Puno', image: 'assets/img/destinations/puno/lake-titicaca-natural-landscape.webp', link: '/destination/puno/packages' },
    { name: 'Arequipa', image: 'assets/img/destinations/arequipa/colca-canon.webp', link: '/destination/arequipa/packages' },
    { name: 'Lima', image: 'assets/img/destinations/lima/destinations-peru-lima-costa-verde.webp', link: '/destination/lima/packages' },
    { name: 'Ica', image: 'assets/img/destinations/ica/huacachina-desert-oasis.webp', link: '/destination/ica/packages' },
    { name: 'Nazca', image: 'assets/img/destinations/nazca/destinations-peru-nasca.webp', link: '/destination/nazca/packages' },
    { name: 'Chachapoyas', image: 'assets/img/destinations/lima/destinations-peru-lima-costa-verde.webp', link: '/destination/chachapoyas/packages' },
  ];*/

}
