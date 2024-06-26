import { Injectable } from '@angular/core';
import {BaseService} from "../basic/basic.services";
import {User} from "../../shared/models/User";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{
  private currentUserSubject: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);
  public currentUser$: Observable<User | undefined> = this.currentUserSubject.asObservable();
  constructor(http: HttpClient) {
    super(http);
    this.resourceEndpoint = 'users';
  }
  createUser(user: User): Observable<User> {
    const userToSend = {
      id: user.id,
      nombre: user.nombre,
      apellidos: user.apellidos,
      correo_electronico: user.correo_electronico,
      telefono: user.telefono,
      dni: user.dni,
      tipo_de_cuenta: user.tipo_de_cuenta,
      contrasena: user.contrasena,
      premium: user.premium,
      daycreate: user.daycreate,
      nivel: user.nivel
    };
    return this.create(userToSend);
  }
  verifyUserCredentials(email: string, password: string): Observable<User | undefined> {
    return this.getAll().pipe(
      map((users: User[]) => {
        const user = users.find(user => user.correo_electronico === email && user.contrasena === password);
        if (user) {
          this.currentUser = user;
          console.log(this.currentUser);
        }
        return user;
      })
    );
  }
  emailOrDniExists(email: string, dni: string): Observable<boolean> {
    return this.getAll().pipe(
      map((users: User[]) => users.some(user => user.correo_electronico === email || user.dni === dni))
    );
  }
  currentUser: User | undefined = undefined;

  setCurrentUser(user: User | undefined): void {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): Observable<User | undefined> {
    return this.currentUser$;
  }



}
