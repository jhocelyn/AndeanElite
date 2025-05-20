import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

export interface NewsItem {
  slug: string;
  title: string;
  city: string;
  category: string;
  date: string;
  image: string;
  text?: string;
  summary?: string; // Agregado para mostrar resumen en tarjeta
}

@Injectable({
  providedIn: 'root'
})
export class newService {
  constructor(private translate: TranslateService) {}

  getNews(): Observable<NewsItem[]> {
    return this.translate.get('NEWS').pipe(
      map((newsObj: any) =>
        Object.keys(newsObj).map(key => {
          const item = newsObj[key];
          return {
            slug: key,
            title: item.title,
            city: item.city,
            category: item.category,
            date: item.date,
            image: item.image,
            text: item.text,
            summary: item.summary
          } as NewsItem;
        })
      )
    );
  }
}
