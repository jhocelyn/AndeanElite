import {LayoutComponent} from './layout/layout.component';
import {ArequipaPackagesComponent} from './arequipa-packages/arequipa-packages.component';
import {Routes} from '@angular/router';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const arequipaRoutes:Routes=[
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:'', redirectTo:'packages', pathMatch:'full'},
      {path: 'packages',component:ArequipaPackagesComponent},
      {path:'info/:id',component:InfoPackagesComponent}
    ]
  }
]
