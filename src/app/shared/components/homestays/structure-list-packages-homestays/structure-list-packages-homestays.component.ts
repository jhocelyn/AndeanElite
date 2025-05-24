import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilterSidebarComponent} from "../../Important/filter-sidebar/filter-sidebar.component";
import {NgForOf, NgIf} from "@angular/common";
import {TranslatePipe} from "@ngx-translate/core";
import {SimplePackage} from '../../../models/SimplePackage.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-structure-list-packages-homestays',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TranslatePipe
    ],
  templateUrl: './structure-list-packages-homestays.component.html',
  styleUrl: './structure-list-packages-homestays.component.css'
})
export class StructureListPackagesHomestaysComponent {
  @Input() packages!: SimplePackage[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  goToPackageDetails(id: string) {
    this.router.navigate(['info-packages', id], { relativeTo: this.activatedRoute });
  }
}
