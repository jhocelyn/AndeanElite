import {Component, Input} from '@angular/core';
import {HighlightCard} from '../../../models/HighlightsCard.model';
import {NgForOf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-destinations-highlights',
  standalone: true,
  imports: [
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './destinations-highlights.component.html',
  styleUrl: './destinations-highlights.component.css'
})
export class DestinationsHighlightsComponent {
  @Input({ required: true }) highlights!: HighlightCard[];
  @Input({ required: true }) imageUrl!: string;
  @Input({ required: true }) overview!: string;   // clave i18n
  @Input({ required: true }) headline!: string;   // clave i18n

  /** Devuelve índice como clave de tracking */
  trackByIndex = (index: number) => index;
}
