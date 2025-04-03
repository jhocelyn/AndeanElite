import {Component, Input} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';
import {NgForOf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-list-packages-structure',
  standalone: true,
  imports: [
    BannerComponent,
    NgForOf
  ],
  templateUrl: './list-packages-structure.component.html',
  styleUrl: './list-packages-structure.component.css'
})
export class ListPackagesStructureComponent {
  @Input() backgroundImage!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() packages!: { id: number; title: string; image: string; price: string }[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  goToPackageDetails(id: number) {
    this.router.navigate(['info-packages', id], { relativeTo: this.activatedRoute });  }}
