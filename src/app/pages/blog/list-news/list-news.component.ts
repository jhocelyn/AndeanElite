import {Component, OnDestroy, OnInit} from '@angular/core';
import {newService} from '../../../services/news.service';
import {FormsModule} from '@angular/forms';
import { NgClass, NgForOf} from '@angular/common';
import {BannerComponent} from '../../../shared/components/general/banner/banner.component';
import {LangChangeEvent, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BlogSectionComponent} from '../../../shared/components/general/blog-section/blog-section.component';
import {NewCardComponent} from '../../../shared/components/general/new-card/new-card.component';
import {Subscription} from 'rxjs';
import {NewsItem} from '../../../shared/models/NewsItem.model';
import {FilterSidebarComponent} from '../../../shared/components/Important/filter-sidebar/filter-sidebar.component';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-list-news',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    BannerComponent,
    TranslatePipe,
    BlogSectionComponent,
    NewCardComponent,
    FilterSidebarComponent
  ],
  templateUrl: './list-news.component.html',
  styleUrl: './list-news.component.css'
})
export class ListNewsComponent implements OnInit, OnDestroy {
  allNews: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  filterCity: string = '';
  filterCategory: string = '';
  searchTerm: string = '';
  cities: string[] = ['', 'lima', 'arequipa', 'puno', 'cusco', 'chachapoyas', 'ica', 'nazca', 'puerto-maldonado'];
  categories: string[] = ['tourism', 'culture', 'family', 'adventure', 'gastronomy', 'romance', 'cultural-heritage'];

  private langSubscription?: Subscription;

  constructor(private newsService: newService, private translate: TranslateService, private title: Title,
              private meta: Meta) {}

  ngOnInit(): void {
    this.loadNewsData();

    // Suscripción a cambio de idioma
    this.langSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadNewsData();
    });

    this.setTranslatedMeta();

    // Se actualiza automáticamente al cambiar idioma
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedMeta();
    });
  }

  loadNewsData(): void {
    this.newsService.getNews().subscribe(data => {
      this.allNews = data;
      this.filteredNews = [...this.allNews];
      this.applyFilters(); // Aplica filtros después de cargar datos
      console.log("Noticias cargadas:", this.allNews);
    });
  }

  setCityFilter(city: string): void {
    this.filterCity = city;
    this.applyFilters();
  }

  setCategoryFilter(category: string): void {
    this.filterCategory = category;
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredNews = this.allNews.filter(news => {
      const matchesSearch = this.searchTerm
        ? news.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        : true;
      const matchesCity = this.filterCity
        ? news.city?.toLowerCase() === this.filterCity.toLowerCase()
        : true;
      const matchesCategory = this.filterCategory
        ? news.category?.toLowerCase() === this.filterCategory.toLowerCase()
        : true;
      return matchesSearch && matchesCity && matchesCategory;
    });
  }
  onSearchChange(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  ngOnDestroy(): void {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  private setTranslatedMeta() {
    this.translate.get(['meta.blog.title', 'meta.blog.description']).subscribe(translations => {
      this.title.setTitle(translations['meta.blog.title']);

      this.meta.updateTag({
        name: 'description',
        content: translations['meta.blog.description']
      });

      // Canonical puede mantenerse fijo si no cambia según idioma
      this.meta.updateTag({
        rel: 'canonical',
        href: 'https://andeanelite.com/blog'
      });
    });
  }
}
