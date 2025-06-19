import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-lima',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './lima.component.html',
  styleUrl: './lima.component.css'
})
export class LimaComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.lima';

  /** banner */
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('historicCenter'),
    this.card('mirafloresMalecon'),
    this.card('barrancoDistrict'), // reemplaza por los IDs reales restantes
    this.card('limaGastronomy'),
    this.card('catacombs'),
    this.card('costaVerde'),
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
