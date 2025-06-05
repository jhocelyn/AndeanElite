import { Component } from '@angular/core';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {BannerComponent} from '../../../shared/components/general/banner/banner.component';
import {
  DestinationsGridComponent
} from '../../../shared/components/general/destinations-grid/destinations-grid.component';
import {TranslatePipe} from '@ngx-translate/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [LazyLoadImageModule, BannerComponent, DestinationsGridComponent, TranslatePipe, NgForOf],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

  //Array of destinations

  destinations=[
    {name:'DISCOVER.COAST',image:'assets/img/destinations/ica/huacachina-desert-oasis.webp', link:'coast'},
    {name:'EXPLORE.ANDES',image:'assets/img/destinations/cusco/machu-picchu-overlook-view.webp', link:'andes'},
    {name:'DISCOVER.JUNGLE',image:'assets/img/destinations/puerto-maldonado/abiseo-river-national-park.webp', link:'jungle'},
  ]

  destinations_2=[
    {name:'EXPLORE.MACHU_PICCHU',image:'assets/img/destinations/cusco/machu-picchu-huayna-picchu-peak.webp', link:'andes/cusco'},
    {name:'DISCOVER.JUNGLE',image:'assets/img/destinations/puerto-maldonado/abiseo-river-national-park.webp', link:'jungle'},
  ]

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
