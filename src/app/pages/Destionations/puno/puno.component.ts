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
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('urosIslands'),
    this.card('taquileIsland'),
    this.card('lampaVillage'), // reemplaza por los IDs reales restantes
    this.card('festivityCandelaria'),
    this.card('sillustaniTombs'),
    this.card('titicacaSunrise'),
  ];

  /** factoría para no repetir código */
  private card(id: string): HighlightCard {
    return {
      image: this.imageUrl,
      alt:   `${this.i18nBase}.cards.${id}.alt`,
      title: `${this.i18nBase}.cards.${id}.title`,
      body:  `${this.i18nBase}.cards.${id}.body`
    };
  }

}
