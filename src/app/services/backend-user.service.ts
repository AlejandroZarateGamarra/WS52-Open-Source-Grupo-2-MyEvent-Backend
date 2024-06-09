import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendUser } from '../shared/models/backend-user.model';

@Injectable({
  providedIn: 'root'
})
export class BackendUserService {
  private usersUrl = 'http://localhost:8080/api/v1/users';

  constructor(private http: HttpClient) { }

  /** POST: create a new user on the server */
  createUser(user: BackendUser): Observable<BackendUser> {
    const url = `${this.usersUrl}/create`;
    return this.http.post<BackendUser>(url, user);
  }

  /** GET: get user by id from the server */
  getUserById(id: number): Observable<BackendUser> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<BackendUser>(url);
  }

  /** GET: get user by email from the server */
  getUserByEmail(correo: string): Observable<BackendUser> {
    const url = `${this.usersUrl}/correo/${correo}`;
    return this.http.get<BackendUser>(url);
  }

  /** GET: get user by name and surname from the server */
  getUserByNameAndSurname(name: string, surname: string): Observable<BackendUser> {
    const url = `${this.usersUrl}/name/${name}/surname/${surname}`;
    return this.http.get<BackendUser>(url);
  }

  /** GET: get all users from the server */
  getAllUsers(): Observable<BackendUser[]> {
    const url = `${this.usersUrl}/all`;
    return this.http.get<BackendUser[]>(url);
  }

  /** DELETE: delete user by name and password from the server */
  deleteUser(name: string, password: string): Observable<BackendUser> {
    const url = `${this.usersUrl}/delete/${name}/${password}`;
    return this.http.delete<BackendUser>(url);
  }

  /** PUT: change user password on the server */
  changeUserPassword(id: string, correo: string, newPassword: string): Observable<BackendUser> {
    const url = `${this.usersUrl}/change-password/${id}/${correo}`;
    return this.http.put<BackendUser>(url, { password: newPassword });
  }

  /** PUT: change username on the server */
  changeUserName(id: string, correo: string, newName: string): Observable<BackendUser> {
    const url = `${this.usersUrl}/change-name/${id}/${correo}`;
    return this.http.put<BackendUser>(url, { name: newName });
  }
}
