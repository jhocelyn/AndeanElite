import {TranslateService} from '@ngx-translate/core';
import {TravelPackage} from '../shared/models/TravelPackage.model';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  constructor(private translate: TranslateService) {}

  getPackagesByCategory(category: string): Observable<TravelPackage[]> {
    return this.translate.get(`PACKAGES.${category}`).pipe(
      map((packages: any) => {
        console.log('Datos originales de TranslateService:', packages);

        if (!Array.isArray(packages)) {
          packages = Object.values(packages);
        }

        return packages.map((pkg: any): TravelPackage => {
          return {
            id: +pkg.id || 0, // Convertir a número y manejar undefined
            title: pkg.title || '',
            subtitle: pkg.subtitle || '',
            days: +pkg.days || 0, // Convertir a número
            nights: +pkg.nights || 0,
            price: +pkg.price || 0,
            mapUrl: pkg.mapUrl
              ? pkg.mapUrl.map((location: any) => ({
                name: location.name || '',
                lat: +location.lat || 0,
                lng: +location.lng || 0,
                day: +location.day || 0,
              }))
              : [],
            description: {
              highlights: pkg.description?.highlights || [],
              text: pkg.description?.text || '',
              itinerary: pkg.description?.itinerary
                ? pkg.description.itinerary.map((item: any) => ({
                  dayTitle: item.dayTitle || '',
                  daySubtitle: item.daySubtitle || '',
                  dayDescription: item.dayDescription || '',
                }))
                : [],
            },
            sampleJourney: pkg.sampleJourney
              ? pkg.sampleJourney.map((journey: any) => ({
                dayTitle: journey.dayTitle || '',
                daySubtitle: journey.daySubtitle || '',
                dayDescription: journey.dayDescription || '',
                accommodations: journey.accommodations || [],
              }))
              : [],
            customOptions: {
              description: pkg.customOptions?.description || '',
              packages: pkg.customOptions?.packages || [],
            },
            pricing: {
              title: pkg.pricing?.title || '',
              included: pkg.pricing?.included || [],
              notIncluded: pkg.pricing?.notIncluded || [],
            },
            images: pkg.images
              ? pkg.images.map((img: any) => ({
                alt: img.alt || '',
                src: img.src || '',
                width: +img.width || 0, // Convertir a número
              }))
              : [],
          };
        });
      })
    );
  }


  getPackageById(category: string, index: number): Observable<TravelPackage | undefined> {
    return this.getPackagesByCategory(category).pipe(
      map(packages => {
        console.log('Lista de paquetes:', packages);

        if (!packages.length) {
          console.warn('No hay paquetes en esta categoría.');
          return undefined;
        }

        // Validar que el índice sea un número válido dentro del rango
        if (index < 0 || index >= packages.length) {
          console.warn(`Índice fuera de rango (${index}), seleccionando el primer paquete.`);
          return packages[0];
        }

        console.log('Paquete seleccionado:', packages[index]); // Ahora `index` es 0-based
        return packages[index];
      })
    );
  }
}
