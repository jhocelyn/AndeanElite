import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, TranslateModule, NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  @Output() languageChanged = new EventEmitter<string>();
  constructor(private translate: TranslateService) {}

  @Input() enableScrollEffect: boolean = false; // Define si cambia de color al hacer scroll

  scrolled: boolean = false; // Estado de scroll
  navbarClasses: string = 'bg-transparent text-white'; // Clases dinámicas del navbar

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.enableScrollEffect) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        this.scrolled = true;
        this.navbarClasses = 'bg-[#034873] text-white shadow-md';
      } else {
        this.scrolled = false;
        this.navbarClasses = 'bg-transparent text-white';
      }
    }else{
      this.scrolled = false;
      this.navbarClasses = 'bg-[#034873] text-white';
    }
  }


  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }
  isMenuOpen = false;
  isDesktop= window.innerWidth > 1024;

   toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
