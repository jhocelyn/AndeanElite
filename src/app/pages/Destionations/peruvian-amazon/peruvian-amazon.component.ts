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
  imageUrl = 'assets/img/destinations/puerto-maldonado/abiseo-river-national-park.webp';
  overview = `${this.i18nBase}.overview`;
  headline = `${this.i18nBase}.headline`;

  /** tarjetas */
  machuPicchuCards: HighlightCard[] = [
    this.card('tambopataReserve','assets/img/destinations/peruvian-amazon/tambopata-1.webp'),
    this.card('treeLodges','assets/img/destinations/peruvian-amazon/amazon-jungle-lodges.webp'),
    this.card('macawClayLick','assets/img/destinations/peruvian-amazon/macaw-clay-lick.webp'), // reemplaza por los IDs reales restantes
    this.card('kuelapFortress','assets/img/destinations/peruvian-amazon/kuelap.webp'),
    this.card('goctaFalls','assets/img/destinations/peruvian-amazon/gocta-waterfall.webp'),
    this.card('livingCulture','assets/img/destinations/peruvian-amazon/living-amazon.webp'),
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
