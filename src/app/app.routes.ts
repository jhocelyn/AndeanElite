import { Routes } from '@angular/router';
import {LayoutComponent} from './pages/layout/layout.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {DestinationsComponent} from './pages/Destionations-pages/destinations/destinations.component';
import {OurProductsComponent} from './pages/our-products/our-products.component';
import {OurServicesComponent} from './pages/our-services/our-services.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: LayoutComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'destinations',component:DestinationsComponent},
  {path:'destination',loadChildren:()=>import('./pages/Destionations-pages/destinations.routes').then(m=>m.destinationsRoutes)},
  {path:'our-products',component:OurProductsComponent},
  {path:'our-services',component:OurServicesComponent}

];
