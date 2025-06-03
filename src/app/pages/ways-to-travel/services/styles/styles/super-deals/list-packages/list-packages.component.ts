import {Component, OnDestroy, OnInit} from '@angular/core';
import {
    ListPackagesStructureComponent
} from "../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component";
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {SimplePackage} from '../../../../../../../shared/models/SimplePackage.model';
import {Subscription} from 'rxjs';
import {PackagesService} from '../../../../../../../services/packages.service';

@Component({
  selector: 'app-list-packages',
  standalone: true,
    imports: [
        ListPackagesStructureComponent
    ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent  implements OnInit,OnDestroy{
  allSuperDeals: SimplePackage[] = [];
  filteredSuperDeals: SimplePackage[] = [];
  filterCity: string = '';
  filterCategory: string = '';
  searchTerm: string = '';

  Description: string = '';
  cities: string[] = ['', 'lima', 'arequipa', 'puno', 'cusco', 'chachapoyas', 'ica', 'nazca', 'puerto-maldonado'];
  categories: string[] = ['', 'culture', 'family', 'adventure', 'gastronomy', 'romance', 'cultural-heritage'];

  private langSubscription?: Subscription;

  constructor(
    private packageService: PackagesService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.loadPackages();
    this.loadDescription(); // <--- nueva línea

    // Escuchar cambios de idioma
    this.langSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.loadPackages();
      this.loadDescription(); // <--- también traducir si cambia el idioma
    });
  }

  loadDescription(): void {
    this.translate.get('STYLES.SUPER_DEALS.DESCRIPTION').subscribe((translated: string) => {
      this.Description = translated;
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  loadPackages(): void {
    this.packageService.getPackages('STYLES','SUPER_DEALS').subscribe(data => {
      this.allSuperDeals = data;
      this.applyFilters();
      console.log("Paquetes cargados:", this.allSuperDeals);
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
    const search = this.searchTerm.toLowerCase();

    this.filteredSuperDeals = this.allSuperDeals.filter(pkg => {
      const matchesSearch = this.searchTerm
        ? pkg.title.toLowerCase().includes(search)
        : true;

      const matchesCity = this.filterCity
        ? pkg.city?.toLowerCase() === this.filterCity.toLowerCase()
        : true;

      const matchesCategory = this.filterCategory
        ? pkg.categories?.some(cat => cat.toLowerCase() === this.filterCategory.toLowerCase())
        : true;

      return matchesSearch && matchesCity && matchesCategory;
    });
  }


  setSearchTerm(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }


}
