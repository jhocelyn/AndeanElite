  import { Component } from '@angular/core';
  import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
  import {NavbarComponent} from './shared/components/Important/navbar/navbar.component';
  import {FooterComponent} from './shared/components/Important/footer/footer.component';
  import {filter} from 'rxjs';

  declare let fbq: Function;  // <-- Esto es clave

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'Andeanelite';
    constructor(private router:Router) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(()=>{
        fbq('track', 'PageView');
      })
    }

  }
