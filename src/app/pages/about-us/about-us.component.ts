import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from "../../shared/components/general/banner/banner.component";
import {NgForOf} from '@angular/common';
interface TeamMember {
  name: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TranslatePipe, BannerComponent, NgForOf],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  team: TeamMember[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadTeam();
    this.translate.onLangChange.subscribe(() => {
      this.loadTeam();
    });
  }

  loadTeam(): void {
    this.translate.get('ABOUT-US.OUR_TEAM.TEAM').subscribe((data: TeamMember[]) => {
      this.team = data;
    });
  }

}
