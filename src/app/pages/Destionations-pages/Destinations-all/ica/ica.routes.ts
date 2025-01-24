import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {IcaPackagesComponent} from './ica-packages/ica-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const IcaRoutes:Routes=[
  {path:'', component:LayoutComponent,
  children:[
    {path:'',redirectTo:'packages',pathMatch:'full'},
    {path:'packages',component:IcaPackagesComponent},
    {path:'info/:id',component:InfoPackagesComponent}
  ]
  }
]
