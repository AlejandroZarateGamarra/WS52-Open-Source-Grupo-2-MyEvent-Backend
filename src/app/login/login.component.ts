import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {UserService} from "../services/user/user.services";
import { User } from '../shared/models/User';
import { BackendUserService } from '../services/backend-user.service';
import { BackendUser } from '../shared/models/backend-user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule ,FormsModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  contrasena: string = "";
  mostrarContrasena: boolean = false;

  currentUser: User | undefined; // Almacena el usuario actual
  Backend_User: BackendUser | undefined;
  constructor(private router: Router, private http: HttpClient, private userService: UserService, private backendUserService: BackendUserService) {}

  verificarCredenciales() {
    this.backendUserService.getUserByEmail(this.email).subscribe((user: BackendUser | undefined) => {
      if (user && user.password === this.contrasena) {
        this.Backend_User = user;
        this.redirectUser();
      } else {
        alert('Usuario y/o contraseña inválidos');
      }
    });
  }

  redirectUser() {
    if (this.Backend_User?.premium) {
      this.router.navigate(['/nopremium']);
    } else {
      // Redirige al usuario no premium a su pantalla
      this.router.navigate(['/nopremium']);
    }
  }
  // Método para redirigir a la página de recuperación de contraseña
  redirigirARecuperacionContrasena() {
    this.router.navigate(['/forgotpass']); // Cambia '/recuperar-contrasena' por la ruta deseada
  }

  redirigirARegistro() {
    this.router.navigate(['/register']);
  }
}
