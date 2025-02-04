import { Component } from '@angular/core';
import {NavbarComponent} from '../../../../../shared/components/navbar/navbar.component';
import {FooterComponent} from '../../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-puerto-maldonado-packages',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './puerto-maldonado-packages.component.html',
  styleUrl: './puerto-maldonado-packages.component.css'
})
export class PuertoMaldonadoPackagesComponent {

}
