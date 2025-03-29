import {Component, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    TranslatePipe
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() backgroundImage: string = '';
  @Input() title: string = '';
}
