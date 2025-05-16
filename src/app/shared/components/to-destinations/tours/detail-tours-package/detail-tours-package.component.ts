import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
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
  selector: 'app-detail-tours-package',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgSwitchCase,
    NgSwitch,
    NgClass
  ],
  templateUrl: './detail-tours-package.component.html',
  styleUrl: './detail-tours-package.component.css'
})
export class DetailToursPackageComponent {
  sections = [
    { id: 'description', name: 'Descripción', icon: 'M8 7V3m8 4V3m-9 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2z' },
    { id: 'itinerary', name: 'Itinerario', icon: 'M5 8l7 7 7-7' },
    { id: 'includes', name: 'Incluye', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'not_includes', name: 'No Incluye', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'prices', name: 'Precios', icon: 'M12 11c.828 0 1.5-.672 1.5-1.5S12.828 8 12 8s-1.5.672-1.5 1.5S11.172 11 12 11zm0 0v6m0 0c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-5a2 2 0 00-2-2h-4a2 2 0 00-2 2z' },
    { id: 'politics', name: 'Políticas', icon: 'M12 6.253v12.494m0 0L8.25 15m3.75 3.747l3.75-3.747' }
  ];
  setActiveSection(section: string) {
    this.activeSection = section;
  }

  activeSection = 'description';
  @Input()  packageData: PackageData | undefined;
}
