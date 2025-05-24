import {Component, OnDestroy, OnInit} from '@angular/core';
import {
    ListPackagesStructureComponent
} from "../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component";
import {LangChangeEvent, TranslatePipe, TranslateService} from '@ngx-translate/core';
import {BannerComponent} from '../../../../../../../shared/components/general/banner/banner.component';
import {
  StructureListPackagesHomestaysComponent
} from '../../../../../../../shared/components/homestays/structure-list-packages-homestays/structure-list-packages-homestays.component';
import {SimplePackage} from '../../../../../../../shared/models/SimplePackage.model';
import {PackagesService} from '../../../../../../../services/packages.service';
import {Subscription} from 'rxjs';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [
    BannerComponent,
    TranslatePipe,
    StructureListPackagesHomestaysComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent implements OnInit,OnDestroy{
  HomestaysData: SimplePackage[] = [];

  private langSubscription?: Subscription;

  constructor(
    private packageService: PackagesService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadPackages();
    // Escuchar cambios de idioma
    this.langSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadPackages();
    });
  }


  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  loadPackages(): void {
    this.packageService.getPackages('HOME_STAYS').subscribe(data => {
      this.HomestaysData = data;
    });
  }
  getIcon(index: number): string {
    const icons = [
      'fa-solid fa-handshake',
      'fas fa-users',
      'fas fa-mountain',
      'fas fa-utensils'
    ];
    return icons[index] || 'fas fa-star';
  }


}
