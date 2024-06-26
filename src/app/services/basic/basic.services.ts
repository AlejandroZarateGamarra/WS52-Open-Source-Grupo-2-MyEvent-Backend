import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {environment} from './environment';

@Injectable({
  providedIn: 'root'
})

export class BaseService<T> {

  basePath: string = `${environment.baseUrl}`;
  resourceEndpoint: string = '';

  constructor(protected _http: HttpClient) { }

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError (
      'Something bad happened; please try again later.'
    );
  }

  resourcePath(){
    return `${this.basePath}/${this.resourceEndpoint}`;
  }

  getOne(id: number): Observable<any>{
    return this._http.get<T>(`${this.resourcePath()}/${id}`, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  getAll(): Observable<any>{
    return this._http.get<T>(this.resourcePath(), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }
  create(item: T): Observable<any>{
    return this._http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

}

export class BasicService {
}
