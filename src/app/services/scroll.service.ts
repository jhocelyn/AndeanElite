import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        const fragment = tree.fragment;

        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              const yOffset = -80; // Altura navbar o el offset que necesites
              const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 100);
        }
      }
    });
  }
}
