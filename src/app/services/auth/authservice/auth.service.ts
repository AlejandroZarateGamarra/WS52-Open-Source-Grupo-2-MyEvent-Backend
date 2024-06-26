import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  login(email: string, password: string): void {
    // Aquí deberías verificar las credenciales del usuario.
    // Este es solo un ejemplo, por lo que simplemente estableceremos _isLoggedIn en true.
    this._isLoggedIn = true;
  }

  logout(): void {
    this._isLoggedIn = false;
  }
}
