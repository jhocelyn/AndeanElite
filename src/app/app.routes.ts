import { Routes } from '@angular/router';
import {LayoutComponent} from './pages/layout/layout.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {DestinationsComponent} from './pages/Destionations-pages/destinations/destinations.component';
import {BookClaimsComponent} from './pages/book-claims/book-claims.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: LayoutComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'destinations',component:DestinationsComponent},
  {path:'destination',loadChildren:()=>import('./pages/Destionations-pages/destinations.routes').then(m=>m.destinationsRoutes)},
  {path:'ways-to-travel',loadChildren:()=>import('./pages/ways-to-travel/ways-to-travel.routes').then(m=>m.waysToTravelRoutes)},
  {path:'book-claims', component:BookClaimsComponent},
  {path:'blog', loadChildren:()=>import('./pages/blog/blog.routes').then(m=>m.blogRoutes)},
];
