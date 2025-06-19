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
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('classicTrail'),
    this.card('shortTrail'),
    this.card('sacredValley'), // reemplaza por los IDs reales restantes
    this.card('rainbowMountain'),
    this.card('morayMaras'),
    this.card('cuscoCity'),
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
