import {Component, OnDestroy, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {
  ListPackagesStructureComponent
} from '../../../../../../../shared/components/general/list-packages-structure/list-packages-structure.component';
import {Subscription} from 'rxjs';
import {SimplePackage} from '../../../../../../../shared/models/SimplePackage.model';
import {PackagesService} from '../../../../../../../services/packages.service';
@Component({
  selector: 'app-list-packages',
  standalone: true,
  imports: [
    ListPackagesStructureComponent,
  ],
  templateUrl: './list-packages.component.html',
  styleUrl: './list-packages.component.css'
})
export class ListPackagesComponent implements OnDestroy,OnInit{
  allTours: SimplePackage[] = [];
  filteredTours: SimplePackage[] = [];
  filterCity: string = '';
  filterCategory: string = '';
  searchTerm: string = '';

  toursDescription: string = '';
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
    this.translate.get('TRAVEL_BY_INTEREST.FULL_DAY_TOURS.DESCRIPTION').subscribe((translated: string) => {
      this.toursDescription = translated;
    });
  }

  ngOnDestroy(): void {
    this.langSubscription?.unsubscribe();
  }

  loadPackages(): void {
    this.packageService.getPackages().subscribe(data => {
      this.allTours = data;
      this.applyFilters();
      console.log("Paquetes cargados:", this.allTours);
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

    this.filteredTours = this.allTours.filter(pkg => {
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

  getNewsByCity(city: string, limit: number = 6): SimplePackage[] {
    return this.allTours
      .filter(pkg => pkg.city?.toLowerCase() === city.toLowerCase())
      .slice(0, limit);
  }

  getNewsByCategory(category: string, limit: number = 6): SimplePackage[] {
    const categoryLower = category.toLowerCase();
    return this.allTours
      .filter(pkg =>
        pkg.categories?.some(cat => cat.toLowerCase() === categoryLower)
      )
      .slice(0, limit);
  }

  setSearchTerm(term: string): void {
    this.searchTerm = term;
    this.applyFilters();
  }

  showMore(city: string): void {
    console.log(`Mostrar más paquetes para ciudad: ${city}`);
    // Aquí podrías redirigir a otra vista o cargar más elementos.
  }

}
