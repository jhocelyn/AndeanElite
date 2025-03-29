import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListTravelByInterstComponent} from './list-travel-by-interst/list-travel-by-interst.component';
import {MiceComponent} from './travel-by-interest/mice/mice.component';
import {TaylorMadeComponent} from './travel-by-interest/taylor-made/taylor-made.component';

export const travelByInterestRoutes:Routes = [
  {path:'',component:LayoutComponent,
  children:[
    {path:'',component:ListTravelByInterstComponent},
    {path:'circuits', loadChildren: () => import('./travel-by-interest/circuits/circuits.routes').then(m => m.circuitsRoutes)},
    {path:'corporate-travel', loadChildren: () => import('./travel-by-interest/corporate-travel/corporate-travel.routes').then(m => m.corporateTravelRoutes)},
    {path:'cruise', loadChildren: () => import('./travel-by-interest/cruise/cruise.routes').then(m => m.cruiseRoutes)},
    {path:'extensions',loadChildren: () => import('./travel-by-interest/extensions/extensions.routes').then(m => m.extensionsRoutes)},
    {path:'family',loadChildren:()=> import('./travel-by-interest/family/family.routes').then(m => m.familyRoutes)},
    {path:'full-day-tours',loadChildren: () => import('./travel-by-interest/full-day-tours/full-day-tours.routes').then(m => m.fullDayToursRoutes)},
    {path:'home-stays',loadChildren: () => import('./travel-by-interest/home-stays/home-stays.routes').then(m => m.homeStaysRoutes)},
    {path:'mice',component:MiceComponent},
    {path:'taylor-made',component:TaylorMadeComponent},
    {path:'trekking',loadChildren: () => import('./travel-by-interest/trekking/trekking.routes').then(m => m.trekkingRoutes)},
  ]
  }
]
