import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-ica',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './ica.component.html',
  styleUrl: './ica.component.css'
})
export class IcaComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.ica';

  /** banner */
  imageUrl = 'assets/img/destinations/ica/destinations-peru-paracas-ica.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('huacachina','assets/img/destinations/ica/huacachina.webp'),
    this.card('duneBuggy','assets/img/destinations/ica/desert-buggy.webp'),
    this.card('vineyards','assets/img/destinations/ica/pisco-wine-route.webp'), // reemplaza por los IDs reales restantes
    this.card('cachiche','assets/img/destinations/ica/the-witch.webp'),
    this.card('ballestasIslands','assets/img/destinations/ica/paracas-e-islas-ballestas.webp'),
    this.card('canyonDeLosPerdidos','assets/img/destinations/ica/the-canyon-of-the-lost.webp'),
  ];

  /** factoría para no repetir código */
  private card(id: string,imageUrl:string): HighlightCard {
    return {
      image: imageUrl,
      alt:   `${this.i18nBase}.cards.${id}.alt`,
      title: `${this.i18nBase}.cards.${id}.title`,
      body:  `${this.i18nBase}.cards.${id}.body`
    };
  }

}
