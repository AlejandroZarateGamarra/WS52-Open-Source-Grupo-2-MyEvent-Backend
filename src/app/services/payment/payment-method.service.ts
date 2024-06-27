import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentMethodService {
  private apiUrl = 'http://localhost:8080/api/v1/credit_cards';

  constructor(private http: HttpClient) { }

  getCreditCards(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
