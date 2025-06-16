  import {Component, OnInit} from '@angular/core';
  import { isPlatformBrowser } from '@angular/common';
  import { Inject, PLATFORM_ID } from '@angular/core';
  import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
  import {NavbarComponent} from './shared/components/Important/navbar/navbar.component';
  import {FooterComponent} from './shared/components/Important/footer/footer.component';
  import { filter } from 'rxjs';
  import {NgIf} from '@angular/common';

  declare global {
    interface Window { fbq: (...args: any[]) => void; }
  }

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavbarComponent, FooterComponent, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent implements OnInit{
    title = 'Andeanelite';
    constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        // Verificación para evitar error si fbq aún no está cargado
        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
          window.fbq('track', 'PageView');
        } else {
          console.warn('Meta Pixel (fbq) aún no está cargado.');
        }
      });
    }

    cookiesAccepted = false;

    ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
        this.cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
        if (this.cookiesAccepted) {
          this.loadAnalytics();
        }
      }
    }

    acceptCookies() {
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('cookiesAccepted', 'true');
        this.cookiesAccepted = true;
        this.loadAnalytics();
      }
    }

    loadAnalytics() {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-LQCL7CW1PK';
      script.async = true;
      document.head.appendChild(script);

      const inlineScript = document.createElement('script');
      inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LQCL7CW1PK');
    `;
      document.head.appendChild(inlineScript);
    }

  }
