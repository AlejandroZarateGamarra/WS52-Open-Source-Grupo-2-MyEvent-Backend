import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../../shared/models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private apiUrl = 'http://localhost:3000/bills';

  constructor(private http: HttpClient) { }

  createBill(bill: Bill): Observable<any> {
    return this.http.post<any>(this.apiUrl, bill);
  }
}
