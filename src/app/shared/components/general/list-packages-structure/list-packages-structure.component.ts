import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';
import {FilterSidebarComponent} from '../../Important/filter-sidebar/filter-sidebar.component';
import {SimplePackage} from '../../../models/SimplePackage.model';

@Component({
  selector: 'app-list-packages-structure',
  standalone: true,
  imports: [
    BannerComponent,
    NgForOf,
    FilterSidebarComponent,
    TranslatePipe,
    NgIf
  ],
  templateUrl: './list-packages-structure.component.html',
  styleUrl: './list-packages-structure.component.css'
})
export class ListPackagesStructureComponent {
  @Input() backgroundImage!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() packages!: SimplePackage[];
  @Input() cities: string[] = [];
  @Input() categories: string[] = [];

  @Input() filterCity: string = '';
  @Input() filterCategory: string = '';
  @Input() searchTerm: string = '';

  @Output() cityChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() searchChange = new EventEmitter<string>();

  onCityChange(city: string): void {
    this.cityChange.emit(city);
  }

  onCategoryChange(category: string): void {
    this.categoryChange.emit(category);
  }

  onSearchChange(term: string): void {
    this.searchChange.emit(term);
  }
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToPackageDetails(id: string) {
    this.router.navigate(['info-packages', id], { relativeTo: this.activatedRoute });
  }
}
