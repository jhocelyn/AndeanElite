import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {
 private baseUrl='https://pruebaalejandrol.myshopify.com/admin/api/2025-01/graphql.json';
 private accessToken = '7bc462aad3817a61643058f950dafe57-1736283981'; // Generado en Shopify Admin
 constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': this.accessToken
    });

    const query = {
      query: `
        query {
          products(first: 10) {
            edges {
              node {
                id
                title
                descriptionHtml
                images(first: 1) {
                  edges {
                    node {
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      `
    };

    return this.http.post(this.baseUrl, query, { headers });
  }

}
