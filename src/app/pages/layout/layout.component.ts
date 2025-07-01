import {Component, OnInit, Inject, PLATFORM_ID, HostListener, ViewChild, ElementRef} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import AOS from 'aos';
import {SliderComponent} from '../../shared/components/Important/slider/slider.component';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {Router, RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SliderComponent, TranslatePipe, NgForOf, NgClass, RouterLink, NgIf, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit{
  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;
  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  formData = {
    name: '',
    email: '',
    phone: ''
  };
  exitedMessage=false;
  interests = [
    { slug:'circuits', title: 'Circuits', image: '/assets/img/ways-to-travel/travel-by-interest/circuits/circuits-peru.webp' },
    { slug:'extensions', title: 'Extensions', image: '/assets/img/ways-to-travel/travel-by-interest/extensions/extensions-peru.webp' },
    { slug:'trekking', title: 'Trekking', image: '/assets/img/ways-to-travel/travel-by-interest/trekking/trekking-peru.webp' },
    { slug:'full-day-tours', title: 'Full-Day-Tours', image: '/assets/img/ways-to-travel/travel-by-interest/tours/full-tours-peru.webp' },
    { slug:'family', title: 'Family', image: '/assets/img/ways-to-travel/travel-by-interest/family/family-travel-peru.webp' },
    { slug:'taylor-made', title: 'taylor-made', image: '/assets/img/ways-to-travel/travel-by-interest/taylor-made/taylor-made-travel.webp' },
    { slug:'cruise', title: 'Cruise', image: '/assets/img/ways-to-travel/travel-by-interest/cruise/cruise-peru.webp' },
    { slug:'mice', title: 'Mice', image: '/assets/img/ways-to-travel/travel-by-interest/mice/mice-travel.webp' },
    { slug:'homestays', title: 'Homestays', image: '/assets/img/ways-to-travel/travel-by-interest/homestays/homestays-peru.webp' },
    { slug:'corporate-travel', title: 'Corporate-Travel', image: '/assets/img/ways-to-travel/travel-by-interest/corporate-travel/corporate-travel.webp' },
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
    private router:Router,
    private http: HttpClient,
    private title: Title,
    private meta: Meta
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
    this.translate.get('HOME_TESTIMONIALS.TESTIMONIALS.LIST').subscribe((data) => {
      this.testimonials = data;
    });

    this.translate.onLangChange.subscribe(() => {
      this.loadWhyItems(); // <- ⚠️ Añade esta línea para recargar los textos traducidos
    });
    this.setTranslatedMeta();

    // Se actualiza automáticamente al cambiar idioma
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedMeta();
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
  testimonials :any[]= [
  ];

  currentIndex = 0;

  get currentTestimonial() {
    return this.testimonials[this.currentIndex];
  }

  get starsArray() {
    return Array(parseInt(this.currentTestimonial?.STARS));
  }

  prevTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  //Forms
  submitForm() {
    const payload = {
      ...this.formData,
      form: 'contact-us-home'
    };

    const url = 'https://script.google.com/macros/s/AKfycbwQ6clI6kJl3HRLlGN6oAz22TS1ZMU29M84nP14i4S1pCjdtOMd-a7yPFTSfcvg5rOv/exec';
    const headers = {
      'Content-Type': 'text/plain;charset=utf-8'
    };

    fetch(url, {
      redirect: 'follow',
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)  // ← CORREGIDO
    })
      .then(response => response.json())
      .then(data => {
        console.log('Datos enviados correctamente:', data);
        this.exitedMessage=true
        setTimeout(() => this.exitedMessage= false, 1000);
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert('❌ Ocurrió un error al enviar el formulario.');
      });
  }

  private setTranslatedMeta() {
    this.translate.get(['meta.home.title', 'meta.home.description']).subscribe(translations => {
      this.title.setTitle(translations['meta.home.title']);

      this.meta.updateTag({
        name: 'description',
        content: translations['meta.home.description']
      });

      // Canonical puede mantenerse fijo si no cambia según idioma
      this.meta.updateTag({
        rel: 'canonical',
        href: 'https://andeanelite.com/'
      });
    });
  }


  openWhatsApp(): void {
    const lang = this.translate.currentLang;

    const message =
      lang === 'en'
        ? 'Hi! I would like to plan my trip with Andean Elite.'
        : 'Hola, quiero planificar mi viaje con Andean Elite.';

    const phone = '51950194035';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }
  showCertModal = false;

  // ruta de la imagen grande o vertical
  modalImageSrc = 'assets/img/certifications/Protegeme-Info.webp';

  openCertModal() {
    this.showCertModal = true;
  }

  closeCertModal() {
    this.showCertModal = false;
  }
}
