import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from "../../shared/components/general/banner/banner.component";
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslatePipe, BannerComponent, NgForOf],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
    });
  }


}
