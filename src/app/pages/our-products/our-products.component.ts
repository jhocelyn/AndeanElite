import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-our-products',
  standalone: true,
    imports: [NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.css'
})
export class OurProductsComponent {


}
