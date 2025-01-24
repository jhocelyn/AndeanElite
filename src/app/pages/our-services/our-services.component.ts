import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-our-services',
  standalone: true,
    imports: [NavbarComponent, FooterComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.css'
})
export class OurServicesComponent {

}
