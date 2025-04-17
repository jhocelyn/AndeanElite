import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  PLATFORM_ID,
  Renderer2
} from '@angular/core';
import {isPlatformBrowser, NgClass, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, TranslateModule, NgClass, NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  @Output() languageChanged = new EventEmitter<string>();
  @Input() enableScrollEffect: boolean = true;

  scrolled: boolean = false;
  navbarClasses: string = 'bg-transparent text-white';
  isDesktop = false;
  isWaysToTravelOpen = false;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDesktop = window.innerWidth > 1024;
      this.renderer.listen('window', 'scroll', () => {
        if (this.enableScrollEffect) {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          this.scrolled = scrollTop > 50;
          this.navbarClasses = this.scrolled ? 'bg-[#034873] text-white shadow-md' : 'bg-transparent text-white';
        }
      });
    }
  }


  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }

  //Setting to config dektop
  toggleWaysToTravelMenu() {
    this.isWaysToTravelOpen = !this.isWaysToTravelOpen;
    this.isMenuAboutUsOpen=false;
  }
  isStyleOpen=true;
  toggleStyleMenu() {
    this.isStyleOpen = true;
  }
  toggleTravelByMenu() {
    this.isStyleOpen = false;
  }
  isMenuAboutUsOpen = false;
  toggleAboutUsMenu(){
    this.isMenuAboutUsOpen=!this.isMenuAboutUsOpen;
    this.isWaysToTravelOpen=false
  }

  //Setting to menu mobil
  isMenuOpen = false;
  activeSubMenu: string | null = null;
  activeSubSubMenu: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.activeSubMenu = null; // Cierra cualquier submenú abierto al cerrar el menú principal
    this.activeSubSubMenu = null; // Cierra cualquier submenú abierto al cerrar el menú principal
  }

  openSubMenu(menu: string) {
    this.activeSubMenu = menu;
    this.activeSubSubMenu=null;
  }

  closeSubMenu() {
    this.activeSubMenu = null;
    this.activeSubSubMenu=null;
  }

  closeAllMenus() {
    this.isMenuOpen = false;
    this.activeSubMenu = null;
    this.activeSubSubMenu = null;
    this.isMenuAboutUsOpen=false;
    this.isWaysToTravelOpen=false
  }

  openSubSubMenu(menu: string) {
    this.activeSubSubMenu = menu;
  }

  closeSubSubMenu() {
    this.activeSubSubMenu = null;
  }

  phoneNumber: string = '+51950194035'; // 📌 Reemplaza con tu número de WhatsApp
  message: string = 'Hola, quiero más información sobre los paquetes de viaje.';

  openWhatsApp() {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(this.message)}`;
    window.open(url,'_blank');
  }
}
