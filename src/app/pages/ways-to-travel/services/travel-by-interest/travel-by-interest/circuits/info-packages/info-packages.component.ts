import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {
  DetailToursPackageComponent
} from '../../../../../../../shared/components/tours/detail-tours-package/detail-tours-package.component';
import {NgIf} from '@angular/common';
import {TourBannerComponent} from '../../../../../../../shared/components/tours/tour-banner/tour-banner.component';
import {
  DetailCircuitsPackageComponent
} from '../../../../../../../shared/components/circuits/detail-circuits-package/detail-circuits-package.component';
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
  from: string;
  optional: string[];
  politics: string[];
  images: {
    alt: string;
    src: string;
    width: number;
  }[];
  comfort:{
    name:string,
    simple:string,
    double:string,
    triple:string,
    child:string,
  }[];
  deluxe:{
    name:string,
    simple:string,
    double:string,
    triple:string,
    child:string,
  }[];
  premium:{
    name:string,
    simple:string,
    double:string,
    triple:string,
    child:string,
  }[];
}

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    DetailToursPackageComponent,
    NgIf,
    TourBannerComponent,
    DetailCircuitsPackageComponent
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent implements OnInit{
  packageData: PackageData | undefined;

  constructor(private route: ActivatedRoute, private translate: TranslateService) {}

// info-packages.component.ts
  ngOnInit() {
    this.route.params.subscribe(params => {
      const packageId = params['id'];
      this.translate.get(`PACKAGES.CIRCUITS.${packageId}`).subscribe((data: PackageData) => {
        if (data) {
          this.packageData = data;
          console.log(this.packageData);
        } else {
          console.error(`Paquete con ID ${packageId} no encontrado.`);
        }
      }, error => {
        console.error("Error al cargar el paquete de traducción:", error);
      });
    });
  }

}
