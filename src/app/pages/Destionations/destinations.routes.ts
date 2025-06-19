import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {CuscoComponent} from './cusco/cusco.component';
import {MachuPicchuComponent} from './machu-picchu/machu-picchu.component';
import {SacredValleyComponent} from './sacred-valley/sacred-valley.component';
import {PeruvianAmazonComponent} from './peruvian-amazon/peruvian-amazon.component';
import {ArequipaComponent} from './arequipa/arequipa.component';
import {LimaComponent} from './lima/lima.component';
import {IcaComponent} from './ica/ica.component';
import {NazcaComponent} from './nazca/nazca.component';
import {PunoComponent} from './puno/puno.component';
export const destinationsRoutes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',component:DestinationsComponent},
      {path:'cusco',component:CuscoComponent},
      {path:'machu-picchu',component:MachuPicchuComponent},
      {path:'sacred-valley',component:SacredValleyComponent},
      {path:'peruvian-amazon',component:PeruvianAmazonComponent},
      {path:'arequipa-&-colca-canon',component:ArequipaComponent},
      {path:'lima',component:LimaComponent},
      {path:'ica',component:IcaComponent},
      {path:'nazca',component:NazcaComponent},
      {path:'puno',component:PunoComponent},
      {path:'',redirectTo:'destinations',pathMatch:'full'},
    ]
  }
]
