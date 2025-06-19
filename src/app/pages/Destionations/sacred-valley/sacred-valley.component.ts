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
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('pisacRuins'),
    this.card('ollantaytambo'),
    this.card('marasMoray'), // reemplaza por los IDs reales restantes
    this.card('urubamba'),
    this.card('chinchero'),
    this.card('adventureSports'),
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
