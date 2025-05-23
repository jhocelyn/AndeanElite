import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {PriceOption} from '../../../models/PriceOption.model';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-price-table',
  standalone: true,
  imports: [
    NgForOf,
    TranslatePipe
  ],
  templateUrl: './price-table.component.html',
  styleUrl: './price-table.component.css'
})
export class PriceTableComponent {
  @Input() options: PriceOption[] = [];

}
