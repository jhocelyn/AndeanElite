import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-machu-picchu',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './machu-picchu.component.html',
  styleUrl: './machu-picchu.component.css'
})
export class MachuPicchuComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.machuPicchu';

  /** banner */
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('classicTrail'),
    this.card('shortTrail'),
    this.card('sunGate'), // reemplaza por los IDs reales restantes
    this.card('huaynaPicchu'),
    this.card('templeOfTheSun'),
    this.card('mysticalExperience'),
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
