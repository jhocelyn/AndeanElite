import {Component, OnInit, Inject, PLATFORM_ID, HostListener, ViewChild, ElementRef} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import AOS from 'aos';
import {SliderComponent} from '../../shared/components/Important/slider/slider.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SliderComponent, TranslatePipe, NgForOf, NgClass, RouterLink, NgIf, NgOptimizedImage],
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
    const card = container.querySelector('div'); // Asume que cada tarjeta es un <div>

    if (card) {
      const cardWidth = card.offsetWidth + 24; // 24px es el gap-6 entre tarjetas (6 * 4 = 24)
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
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

    this.translate.onLangChange.subscribe(() => {
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

    this.translate.onLangChange.subscribe(() => {
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

  //TESTIMONIOS
  testimonials = [
    {
      text: `Mi primera vez en Sudamérica y qué mejor manera que con Andean Elite.
             Me enamoré perdidamente de Perú: la gastronomía en Lima, la majestuosidad de Machu Picchu,
             la calidez de la gente de Cusco. Cada momento fue mágico. Ya estoy planeando regresar para
             conocer la Amazonía.`,
      name: 'Laura Mitchell',
      stars: 5,
      location: 'Toronto, Canadá',
      date: 'Agosto 2024',
      tripType: 'Hecho a la medida - Aniversario de bodas'
    },
    {
      text: `Viajé sola y me sentí acompañada todo el tiempo.
             Desde el primer contacto, el equipo fue atento y cálido.
             Machu Picchu fue un sueño, pero lo que más me impactó fue la comunidad de Uros.`,
      name: 'Sofía González',
      stars: 5,
      location: 'Barcelona, España',
      date: 'Julio 2024',
      tripType: 'Viaje cultural - Experiencia local'
    },
    {
      text: `Viajamos con nuestros hijos adolescentes y todo estuvo perfectamente balanceado:
             aventura, cultura y tiempo libre. El Valle Sagrado fue mágico y nuestros guías eran increíbles.`,
      name: 'Robert & Emily Harris',
      stars: 4,
      location: 'San Diego, EE.UU.',
      date: 'Junio 2024',
      tripType: 'Familiar - Vacaciones escolares'
    }
  ];

  currentIndex = 0;

  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  get starsArray() {
    return Array(this.currentTestimonial.stars);
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

}
