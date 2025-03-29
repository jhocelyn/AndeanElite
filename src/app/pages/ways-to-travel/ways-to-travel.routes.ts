import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListServicesComponent} from './list-services/list-services.component';

export const waysToTravelRoutes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',component:ListServicesComponent},
      {path:'styles', loadChildren: () => import('./services/styles/styles.routes').then(m => m.stylesRoutes)},
      {path:'travel-by-interest', loadChildren: () => import('./services/travel-by-interest/travel-by-interest.routes').then(m => m.travelByInterestRoutes)},

    ]
  }
]
