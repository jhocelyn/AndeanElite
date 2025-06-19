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
  imageUrl = 'assets/img/destinations/cusco/machu-picchu-huayna-picchu-peak.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('classicTrail','assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp'),
    this.card('shortTrail','assets/img/destinations/cusco/inca-trail-view.webp'),
    this.card('sunGate','assets/img/destinations/cusco/inti-punku-puerta-del-sol.webp'), // reemplaza por los IDs reales restantes
    this.card('huaynaPicchu','assets/img/destinations/cusco/machu-picchu-overlook-view.webp'),
    this.card('templeOfTheSun','assets/img/destinations/cusco/templo-del-sol-en-machu-picchu.webp'),
    this.card('mysticalExperience','assets/img/destinations/cusco/cusco-espiritual.webp'),
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
