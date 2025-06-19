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
  private readonly i18nBase = 'destinations.nazca';

  /** banner */
  imageUrl = 'assets/img/destinations/nazca/destinations-peru-nasca.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('nazcaLinesFlight','assets/img/destinations/nazca/nazca-lines.webp'),
    this.card('cantallocAqueducts','assets/img/destinations/nazca/cantalloc-aqueducts.webp'),
    this.card('chauchillaCemetery','assets/img/destinations/nazca/Cahuachi.webp'),
    this.card('pyramidsCahuachi','assets/img/destinations/nazca/nazca-chauchilla.webp'),
    this.card('planetarium','assets/img/destinations/nazca/planetarium.webp'),
    this.card('desertSunset','assets/img/destinations/nazca/sunset-over.webp'),
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
