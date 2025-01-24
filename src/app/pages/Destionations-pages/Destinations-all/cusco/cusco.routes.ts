import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {CuscoPackagesComponent} from './cusco-packages/cusco-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const cuscoRoutes:Routes=[
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:'', redirectTo:'packages', pathMatch:'full'},
      {path: 'packages',component:CuscoPackagesComponent},
      {path:'info/:id',component:InfoPackagesComponent}
    ]
  }
]
