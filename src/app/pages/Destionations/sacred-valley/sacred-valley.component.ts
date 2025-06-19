import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-sacred-valley',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './sacred-valley.component.html',
  styleUrl: './sacred-valley.component.css'
})
export class SacredValleyComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.sacredValley';

  /** banner */
  imageUrl = 'assets/img/destinations/cusco/sacred-valley.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('pisacRuins','assets/img/destinations/sacred-valley/pisac-market.webp'),
    this.card('ollantaytambo','assets/img/destinations/sacred-valley/Ollantaytambo.webp'),
    this.card('marasMoray','assets/img/destinations/sacred-valley/Maras-Salt.webp'), // reemplaza por los IDs reales restantes
    this.card('urubamba','assets/img/destinations/sacred-valley/Urubamba.webp'),
    this.card('chinchero','assets/img/destinations/sacred-valley/explanada_chinchero.webp'),
    this.card('adventureSports','assets/img/destinations/sacred-valley/treks-in-the-sacred-valley.webp'),
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
