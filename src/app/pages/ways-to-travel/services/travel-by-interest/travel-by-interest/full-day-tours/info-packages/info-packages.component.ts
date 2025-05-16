import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TourBannerComponent } from '../../../../../../../shared/components/tours/tour-banner/tour-banner.component';
import { NgIf} from '@angular/common';
import {
  DetailPackageComponent
} from '../../../../../../../shared/components/tours/detail-package/detail-package.component';
import {
  DetailToursPackageComponent
} from '../../../../../../../shared/components/to-destinations/tours/detail-tours-package/detail-tours-package.component';


interface PackageData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  whyChooseUs: string[];
  itinerary: string[];
  startDate: string;
  endDate: string;
  includes: string[];
  notIncluded: string[];
  prices: {
    per: string;
    ext: string;
  };
  optional: string[];
  politics: string[];
  images: {
    alt: string;
    src: string;
    width: number;
  }[];
}

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    TourBannerComponent,
    NgIf,
    DetailPackageComponent,
    DetailToursPackageComponent
  ],
  templateUrl: './info-packages.component.html',
  styleUrls: ['./info-packages.component.css']
})
export class InfoPackagesComponent {
  packageData: PackageData | undefined;

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const packageId = params['id'];
      this.translate.get(`PACKAGES.FULL_DAY_TOURS.${packageId}`).subscribe(data => {
        this.packageData = data;
      });
    });
  }

}
