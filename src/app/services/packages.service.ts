import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {SimplePackage} from '../shared/models/SimplePackage.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  constructor(private translate: TranslateService) {}

  getPackages(Categoria1:string,Categoria2:string): Observable<SimplePackage[]> {
    return this.translate.get(`${Categoria1}.${Categoria2}.PACKAGES`).pipe(
      map((packagesObj: any) =>
        Object.keys(packagesObj).map(key => {
          const item = packagesObj[key];
          return {
            slug: key,
            title: item.title,
            categories: item.categories,
            city: item.city,
            image: item.image,
            price: item.price,
            days:item.days,
            nights: item.nights,
          } as SimplePackage;
        })
      )
    );
  }

}
