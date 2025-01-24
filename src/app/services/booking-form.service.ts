import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Asegúrate de que este import esté presente
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Esto asegura que el servicio esté disponible globalmente
})
export class BookingFormService {
  constructor(private http: HttpClient) {}

  sendFormData(formData: any): Observable<any> {
    const url = 'https://script.google.com/macros/s/AKfycbwznx7aF2K0r5C3tJerwjoj1f8CAIeNN2gXHEUZH4_B5hMBJk0FUCoF_VbcX7boJMrSIg/exec';
    const headers = { 'Content-Type': 'text/plain;charset=utf-8' };
    return this.http.post(url, formData, { headers });
  }
}
