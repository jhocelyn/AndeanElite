import {
  Component,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ScrollService} from '../../../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, TranslateModule, NgClass, NgIf, NgForOf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  @Output() languageChanged = new EventEmitter<string>();

  // Estado general
  isDesktop = false;

  // Estado para navegación de escritorio
  isWaysToTravelOpen = false;
  isStyleOpen = true;
  isPeruOpen = false;
  isAboutUsOpen = false;
  isTravelByInterestOpen = false;


  // Estado para navegación móvil
  isMenuOpen = false;
  activeSubMenu: string | null = null;
  activeSubSubMenu: string | null = null;

  // Configuración de contacto
  phoneNumber = '+51950194035';
  message = 'Hola, quiero más información sobre los paquetes de viaje.';

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth > 1024;
    }
  }

  // Cambiar idioma
  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }

  // Métodos para escritorio
  toggleWaysToTravelMenu() {
    this.isWaysToTravelOpen = !this.isWaysToTravelOpen;
    this.isAboutUsOpen = false;

  }

  openStyleMenu() {
    this.isStyleOpen = true;
    this.isPeruOpen = false;
    this.isTravelByInterestOpen = false;
  }

  openTravelByMenu() {
    this.isStyleOpen = false;
    this.isPeruOpen = false;
    this.isTravelByInterestOpen = true;
  }

  openPeruMenu() {
    this.isPeruOpen = true;
    this.isStyleOpen = false;
    this.isTravelByInterestOpen = false;
  }

  toggleAboutUsMenu() {
    this.isAboutUsOpen = !this.isAboutUsOpen;
    this.isWaysToTravelOpen = false;
  }

  // Métodos para móvil
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.resetMobileMenus();
  }

  openSubMenu(menu: string) {
    this.activeSubMenu = menu;
    this.activeSubSubMenu = null;
  }

  closeSubMenu() {
    this.activeSubMenu = null;
    this.activeSubSubMenu = null;
  }

  openSubSubMenu(menu: string) {
    this.activeSubSubMenu = menu;
  }

  closeSubSubMenu() {
    this.activeSubSubMenu = null;
  }

  closeAllMenus() {
    this.isMenuOpen = false;
    this.activeSubMenu = null;
    this.activeSubSubMenu = null;
    this.isWaysToTravelOpen = false;
    this.isAboutUsOpen = false;
  }

  private resetMobileMenus() {
    this.activeSubMenu = null;
    this.activeSubSubMenu = null;
  }

  // Abrir WhatsApp con mensaje predeterminado
  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url, '_blank');
  }
}
