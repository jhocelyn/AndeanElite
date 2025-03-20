import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/components/Important/navbar/navbar.component';
import {FooterComponent} from '../../shared/components/Important/footer/footer.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TranslatePipe],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
