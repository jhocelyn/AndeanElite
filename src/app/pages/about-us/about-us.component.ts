import {Component, OnInit} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from "../../shared/components/general/banner/banner.component";
import {NgForOf} from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslatePipe, BannerComponent, NgForOf],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
  constructor(
    private translate: TranslateService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.setTranslatedMeta();

    // Se actualiza automáticamente al cambiar idioma
    this.translate.onLangChange.subscribe(() => {
      this.setTranslatedMeta();
    });
  }

  private setTranslatedMeta() {
    this.translate.get(['meta.about.title', 'meta.about.description']).subscribe(translations => {
      this.title.setTitle(translations['meta.about.title']);

      this.meta.updateTag({
        name: 'description',
        content: translations['meta.about.description']
      });

      // Canonical puede mantenerse fijo si no cambia según idioma
      this.meta.updateTag({
        rel: 'canonical',
        href: 'https://andeanelite.com/about-us'
      });
    });
  }
}
