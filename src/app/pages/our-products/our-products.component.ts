import {Component} from '@angular/core';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {TranslatePipe} from "@ngx-translate/core";

@Component({
  selector: 'app-our-products',
  standalone: true,
    imports: [NavbarComponent, CommonModule, FooterComponent, TranslatePipe],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css'
})
export class OurProductsComponent {


}
