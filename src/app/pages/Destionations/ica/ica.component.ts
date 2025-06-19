import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';

@Component({
  selector: 'app-ica',
  standalone: true,
  imports: [],
  templateUrl: './ica.component.html',
  styleUrl: './ica.component.css'
})
export class IcaComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.ica';

  /** banner */
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('huacachina'),
    this.card('duneBuggy'),
    this.card('vineyards'), // reemplaza por los IDs reales restantes
    this.card('cachiche'),
    this.card('ballestasIslands'),
    this.card('canyonDeLosPerdidos'),
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
