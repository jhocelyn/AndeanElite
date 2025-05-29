import {Component, OnInit, Inject, PLATFORM_ID, HostListener, ViewChild, ElementRef} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
import AOS from 'aos';
import {SliderComponent} from '../../shared/components/Important/slider/slider.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SliderComponent, TranslatePipe, NgForOf, NgClass, RouterLink, NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;

  interests = [
    { slug:'circuits', title: 'Circuits', image: '/assets/img/ways-to-travel/travel-by-interest/circuits/circuits-peru.webp' },
    { slug:'extensions', title: 'Extensions', image: '/assets/img/ways-to-travel/travel-by-interest/extensions/extensions-peru.webp' },
    { slug:'trekking', title: 'Trekking', image: '/assets/img/ways-to-travel/travel-by-interest/trekking/trekking-peru.webp' },
    { slug:'full-day-tours', title: 'FullDay', image: '/assets/img/ways-to-travel/travel-by-interest/tours/full-tours-peru.webp' },
    { slug:'family', title: 'Family', image: '/assets/img/ways-to-travel/travel-by-interest/family/family-travel-peru.webp' },
    { slug:'taylor-made', title: 'Taylor', image: '/assets/img/ways-to-travel/travel-by-interest/taylor-made/taylor-made-travel.webp' },
    { slug:'cruise', title: 'Cruise', image: '/assets/img/ways-to-travel/travel-by-interest/cruise/cruise-peru.webp' },
    { slug:'mice', title: 'Mice', image: '/assets/img/ways-to-travel/travel-by-interest/mice/mice-travel.webp' },
    { slug:'homestays', title: 'Homestays', image: '/assets/img/ways-to-travel/travel-by-interest/homestays/homestays-peru.webp' },
    { slug:'corporate-travel', title: 'Corporate', image: '/assets/img/ways-to-travel/travel-by-interest/corporate-travel/corporate-travel.webp' },
  ];

  scrollCarousel(direction: 'left' | 'right') {
    const container = this.carouselContainer.nativeElement;
    const scrollAmount = 290; // ajusta al tamaño de tus tarjetas + gap
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }

  goToAllInterests() {
    this.router.navigate(['/ways-to-travel/travel-by-interest']);
  }


  styles = [
    {
      name: 'deluxe',
      image: 'deluxe-travel-peru.webp'
    },
    {
      name: 'comfort',
      image: 'comfort-travel.webp'
    },
    {
      name: 'super-deals',
      image: 'super-deals-travel-peru.webp'
    }
  ];

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
    private translate: TranslateService,
    private router:Router
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
