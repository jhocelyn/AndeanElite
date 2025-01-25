import { Component } from '@angular/core';
import {NavbarComponent} from '../../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../../shared/components/footer/footer.component';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, RouterLink, TranslatePipe],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {

}
