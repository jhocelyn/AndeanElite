import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListStylesComponent} from './list-styles/list-styles.component';

export const stylesRoutes:Routes=[
  {
    path:'',component:LayoutComponent,
    children:[
      {path:'',component:ListStylesComponent},
      {path:'deluxe', loadChildren: () => import('./styles/deluxe/deluxe.routes').then(m => m.deluxeRoutes)},
      {path:'comfort', loadChildren: () => import('./styles/comfort/comfort.routes').then(m => m.comfortRoutes)},
      {path:'super-deals', loadChildren: () => import('./styles/super-deals/super-deals.routes').then(m => m.superDealsRoutes)}
    ]
  }
]
