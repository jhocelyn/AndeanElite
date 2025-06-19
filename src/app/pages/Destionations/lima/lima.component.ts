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
  imageUrl = 'assets/img/destinations/lima/destinations-peru-lima-costa-verde.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('historicCenter','assets/img/destinations/lima/limas-historic-center.webp'),
    this.card('mirafloresMalecon','assets/img/destinations/lima/miraflores-cliffside.webp'),
    this.card('barrancoDistrict','assets/img/destinations/lima/barranco-in-lima.webp'), // reemplaza por los IDs reales restantes
    this.card('limaGastronomy','assets/img/destinations/lima/lima-gastronomia.webp'),
    this.card('catacombs','assets/img/destinations/lima/iglesia-san-francisco-catacumbas.webp'),
    this.card('costaVerde','assets/img/destinations/lima/costa-verde.webp'),
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
