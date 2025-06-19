import { Component } from '@angular/core';
import {HighlightCard} from '../../../shared/models/HighlightsCard.model';
import {
  DestinationsHighlightsComponent
} from '../../../shared/components/to-destinations/destinations-highlights/destinations-highlights.component';

@Component({
  selector: 'app-peruvian-amazon',
  standalone: true,
  imports: [
    DestinationsHighlightsComponent
  ],
  templateUrl: './peruvian-amazon.component.html',
  styleUrl: './peruvian-amazon.component.css'
})
export class PeruvianAmazonComponent {

  /** prefijo base de traducción */
  private readonly i18nBase = 'destinations.peruvianAmazon';

  /** banner */
  imageUrl = 'assets/img/destinations/cusco/Inca-Trail-to-Machu-Picchu.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('tambopataReserve'),
    this.card('treeLodges'),
    this.card('macawClayLick'), // reemplaza por los IDs reales restantes
    this.card('kuelapFortress'),
    this.card('goctaFalls'),
    this.card('livingCulture'),
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
