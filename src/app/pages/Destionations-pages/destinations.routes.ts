import {Routes} from '@angular/router';
import {PuertoMaldonadoPackagesComponent} from './Destinations-all/puerto-maldonado/puerto-maldonado-packages/puerto-maldonado-packages.component';
import {LayoutComponent} from './Destinations-all/layout/layout.component';
export const destinationsRoutes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',redirectTo:'destinations',pathMatch:'full'},
      {path:'arequipa',loadChildren:()=>import('./Destinations-all/arequipa/arequipa.routes').then(m=>m.arequipaRoutes)},
      {path:'cusco',loadChildren:()=>import('./Destinations-all/cusco/cusco.routes').then(m=>m.cuscoRoutes)},
      {path:'ica',loadChildren:()=>import('./Destinations-all/ica/ica.routes').then(m=>m.IcaRoutes)},
      {path:'puerto-maldonado',component:PuertoMaldonadoPackagesComponent},
      {path:'lima',loadChildren:()=>import('./Destinations-all/lima/lima.routes').then(m=>m.LimaRoutes)},
      {path:'nazca',loadChildren:()=>import('./Destinations-all/nazca/nazca.routes').then(m=>m.NazcaRoutes)}
    ]
  }
]
