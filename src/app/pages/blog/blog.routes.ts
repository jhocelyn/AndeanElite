import {Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ListNewsComponent} from './list-news/list-news.component';
import {NewInfoComponent} from './new-info/new-info.component';

export const blogRoutes:Routes=[
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'',component:ListNewsComponent},
      {path:':slug', component:NewInfoComponent},
    ]
  }
]
