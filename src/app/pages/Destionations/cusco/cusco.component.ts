import { Component } from '@angular/core';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';

@Component({
  selector: 'app-cusco',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './cusco.component.html',
  styleUrl: './cusco.component.css'
})
export class CuscoComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.cusco';

  /** banner */
  imageUrl = 'assets/img/destinations/cusco/cusco-ciudad-amazing-view.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('classicTrail','assets/img/destinations/cusco/inca-trail-view.webp'),
    this.card('shortTrail', 'assets/img/destinations/cusco/inka-trail-amazing-view.webp'),
    this.card('sacredValley','assets/img/destinations/cusco/sacred-valley.webp'), // reemplaza por los IDs reales restantes
    this.card('rainbowMountain','assets/img/destinations/cusco/rainbow-mountain-view.webp'),
    this.card('morayMaras','assets/img/destinations/cusco/moray-view.webp'),
    this.card('cuscoCity','assets/img/destinations/cusco/cusco-ciudad-noche.webp'),
  ];

  /** factoría para no repetir código */
  private card(id: string,imageurl:string): HighlightCard {
    return {
      image: imageurl,
      alt:   `${this.i18nBase}.cards.${id}.alt`,
      title: `${this.i18nBase}.cards.${id}.title`,
      body:  `${this.i18nBase}.cards.${id}.body`
    };
  }

}
