import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private refreshNeededSource = new Subject<void>();
  refreshNeeded$ = this.refreshNeededSource.asObservable();

  constructor() { }

  triggerRefresh() {
    this.refreshNeededSource.next();
  }
}
