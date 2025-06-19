import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-puno',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './puno.component.html',
  styleUrl: './puno.component.css'
})
export class PunoComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.puno';

  /** banner */
  imageUrl = 'assets/img/destinations/puno/lake-titicaca-natural-landscape.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('urosIslands','assets/img/destinations/puno/uros-floating.webp'),
    this.card('taquileIsland','assets/img/destinations/puno/taquile-island.webp'),
    this.card('lampaVillage','assets/img/destinations/puno/lampa.webp'),
    this.card('festivityCandelaria','assets/img/destinations/puno/festival-virgen-candelaria.webp'),
    this.card('sillustaniTombs','assets/img/destinations/puno/Sillustani-Chullpas-Visiting-Sillustani.webp'),
    this.card('titicacaSunrise','assets/img/destinations/puno/Amanecer_Titicaca.webp'),
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
