import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {LimaPackagesComponent} from './lima-packages/lima-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const LimaRoutes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'packages',pathMatch:'full'},
      {path:'packages',component:LimaPackagesComponent},
      {path:'info/:id',component:InfoPackagesComponent}
    ]
  }
]
