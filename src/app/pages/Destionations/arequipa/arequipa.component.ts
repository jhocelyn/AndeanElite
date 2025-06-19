import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-arequipa',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './arequipa.component.html',
  styleUrl: './arequipa.component.css'
})
export class ArequipaComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.arequipa';

  /** banner */
  imageUrl = 'assets/img/destinations/arequipa/colca-canon.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('historicCenter','assets/img/destinations/arequipa/arequipa-historical-center.webp'),
    this.card('santaCatalina','assets/img/destinations/arequipa/santa-catalina-home.webp'),
    this.card('colcaCanyon','assets/img/destinations/arequipa/canon-del-colca.webp'), // reemplaza por los IDs reales restantes
    this.card('condorCross','assets/img/destinations/arequipa/the-cross-of-condor.webp'),
    this.card('mistiVolcano','assets/img/destinations/arequipa/clim-misti.webp'),
    this.card('arequipaGastronomy','assets/img/destinations/arequipa/arequipa-food.webp'),
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
