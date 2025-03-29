import { Component } from '@angular/core';
import { BannerComponent } from '../../../../../shared/components/general/banner/banner.component';
import {NgForOf, KeyValuePipe, NgIf} from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

interface TravelStyle {
  TITLE: string;
  slug: string;
  DESCRIPTION: string;
  PACKAGES: { title: string; image: string; price: number }[];
}

@Component({
  selector: 'app-list-styles',
  standalone: true,
  imports: [
    BannerComponent,
    NgForOf,
    RouterLink,
    TranslatePipe,
    KeyValuePipe,
    NgIf
  ],
  templateUrl: './list-styles.component.html',
  styleUrl: './list-styles.component.css'
})
export class ListStylesComponent {
  services: Record<string, TravelStyle> = {};
  bannerImage = 'assets/img/destinations/banner-destinations-peru.webp';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadServices();
    this.translate.onLangChange.subscribe(() => {
      this.loadServices();
    });
  }

  loadServices(): void {
    this.translate.get('STYLES').subscribe((data: Record<string, TravelStyle>) => {
      this.services = data;
    });
  }
}
