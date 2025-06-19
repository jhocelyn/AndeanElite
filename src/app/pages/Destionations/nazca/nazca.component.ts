import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-nazca',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './nazca.component.html',
  styleUrl: './nazca.component.css'
})
export class NazcaComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.cusco';

  /** banner */
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('nazcaLinesFlight'),
    this.card('cantallocAqueducts'),
    this.card('chauchillaCemetery'), // reemplaza por los IDs reales restantes
    this.card('pyramidsCahuachi'),
    this.card('planetarium'),
    this.card('desertSunset'),
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
