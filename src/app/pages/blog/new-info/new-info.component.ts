import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {newService} from '../../../services/news.service';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {NgIf} from '@angular/common';
import {Subscription} from 'rxjs';
import {NewsItem} from '../../../shared/models/NewsItem.model';

@Component({
  selector: 'app-new-info',
  standalone: true,
  imports: [
    TranslatePipe,
    NgIf
  ],
  templateUrl: './new-info.component.html',
  styleUrl: './new-info.component.css'
})
export class NewInfoComponent implements OnInit,OnDestroy{
  newsItem?: NewsItem;
  private langSubscription: Subscription | undefined;

  constructor(
    private route: ActivatedRoute,
    private newsService: newService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadNewsItem();

    // Suscribirse a cambios de idioma por si cambia el contenido
    this.langSubscription = this.translate.onLangChange.subscribe(() => {
      this.loadNewsItem();
    });
  }

  loadNewsItem() {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.newsService.getNews().subscribe(newsList => {
        this.newsItem = newsList.find(news => news.slug === slug);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }
}
