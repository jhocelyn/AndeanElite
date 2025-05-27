import {Component, OnInit, Inject, PLATFORM_ID, HostListener} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
import AOS from 'aos';
import {NavbarComponent} from '../../shared/components/Important/navbar/navbar.component';
import {SliderComponent} from '../../shared/components/Important/slider/slider.component';
import {GalleryComponent} from '../../shared/components/general/gallery/gallery.component';
import {FooterComponent} from '../../shared/components/Important/footer/footer.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SliderComponent, GalleryComponent, TranslatePipe, NgForOf, NgClass, NgIf, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  showModal = false;

  whyItems: { title: string; description: string }[] = [];
  icons = [
    'fa-plane',
    'fa-hotel',
    'fa-headset',
    'fa-landmark',
    'fa-user-tie',
    'fa-shield-alt'
  ];

  galleryTitle: string = '';
  galleryImages: any[] = [];
  galleryTitle1: string = '';
  galleryImages1: any[] = [];
  logoOpacity: number = 1;
  logoScale: number = 1;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      // Forzar evaluación inicial
      this.onWindowScroll();
    }

    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
      this.loadWhyItems();
    });
  }
  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.scrolled = scrollTop > 100;
    console.log('scrollTop:', scrollTop, '→ scrolled:', this.scrolled);

    const maxScroll = 200;
    this.logoOpacity = Math.max(1 - scrollTop / maxScroll, 0);
    this.logoScale = Math.max(1 - scrollTop / (maxScroll * 2), 0.5);
  }



  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }

    this.loadTranslations();

    this.translate.onLangChange.subscribe(() => {
      this.loadTranslations();
      this.loadWhyItems(); // <- ⚠️ Añade esta línea para recargar los textos traducidos
    });
  }

  loadWhyItems() {
    this.translate.get('WHYANDEANELITE').subscribe((res: any) => {
      this.whyItems = Object.keys(res)
        .filter(key => key !== 'TITLE')
        .sort()
        .map(key => ({
          title: res[key].TITLE,
          description: res[key].DESCRIPTION
        }));
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
  getIcon(index: number): string {
    const icons = [
      'fa-solid fa-plane',
      'fa-solid fa-building',
      'fa-solid fa-headset',
      'fa-solid fa-building-columns',
      'fa-solid fa-user-tie',
      'fa-solid fa-shield-halved'
    ];
    return icons[index] || 'fas fa-star';
  }

}
