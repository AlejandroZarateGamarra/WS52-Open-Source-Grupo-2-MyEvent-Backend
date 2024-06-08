import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private api: string = 'http://localhost:8080/api/v1/events';

  constructor(private http:HttpClient) { }

  getAllEvents():Observable<Event []>{
    return this.http.get<Event[]>(this.api);
  }
}
