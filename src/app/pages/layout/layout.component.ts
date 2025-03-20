import {Component, OnInit, Inject, PLATFORM_ID, HostListener} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import {NavbarComponent} from '../../shared/components/Important/navbar/navbar.component';
import {SliderComponent} from '../../shared/components/Important/slider/slider.component';
import {GalleryComponent} from '../../shared/components/gallery/gallery.component';
import {FooterComponent} from '../../shared/components/Important/footer/footer.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, SliderComponent, GalleryComponent, FooterComponent, TranslatePipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  galleryTitle: string = '';
  galleryImages: any[] = [];
  galleryTitle1: string = '';
  galleryImages1: any[] = [];
  logoOpacity: number = 1;
  logoScale: number = 1;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }

    // Cargar datos traducidos
    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
    });
  }
  onLanguageChange(lang: string) {
    this.translate.use(lang).subscribe(() => {
      this.loadTranslations();
    });
  }

  loadTranslations() {
    this.translate.get('galleries.DISCOVER').subscribe((res: any) => {
      this.galleryTitle = res.TITLE;
      this.galleryImages = res.IMAGES;
    });

    this.translate.get('galleries.CUSTOMERS').subscribe((res: any) => {
      this.galleryTitle1 = res.TITLE;
      this.galleryImages1 = res.IMAGES;
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = 200;
    this.logoOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    this.logoScale = Math.max(1 - scrollTop / (maxScroll * 2), 0.5);
  }

}
