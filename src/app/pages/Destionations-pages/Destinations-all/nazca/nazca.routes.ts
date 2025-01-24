import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {NazcaPackagesComponent} from './nazca-packages/nazca-packages.component';
import {InfoPackagesComponent} from './info-packages/info-packages.component';

export const NazcaRoutes:Routes=[
  {path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'packages',pathMatch:'full'},
      {path:'packages',component:NazcaPackagesComponent},
      {path:'info/:id',component:InfoPackagesComponent}
    ]
  }
]
