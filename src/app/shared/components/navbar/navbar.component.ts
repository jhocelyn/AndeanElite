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
import {isPlatformBrowser, NgClass} from '@angular/common';
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
export class NavbarComponent implements OnInit{
  @Output() languageChanged = new EventEmitter<string>();
  @Input() enableScrollEffect: boolean = true;

  scrolled: boolean = false;
  navbarClasses: string = 'bg-transparent text-white';
  isMenuOpen = false;
  isDesktop = false;

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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.languageChanged.emit(lang);
  }
}
