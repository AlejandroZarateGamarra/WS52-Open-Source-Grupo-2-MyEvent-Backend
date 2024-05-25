import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClient} from "@angular/common/http";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

import {UserService} from "../services/user/user.services";
import { User } from '../shared/models/User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatOption, MatSelect],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  accountType: string = 'one';
  nombre = "";
  correo = "";
  apellidos = "";
  contrasena: string =  "";
  Repcontrasena: string = "";
  telefono = "";
  dni = "";
  onlyDate = new Date();
  createday: string ="";
  nivel = 1;

  mostrarTelefono: boolean = false;
  mostrarNombre: boolean = false;
  mostrarEmail: boolean = false;
  mostrarContrasena: boolean = false;
  savepassword: boolean = false;
  mostrarApellido: boolean = false;
  mostrarDni: boolean = false;

  constructor(private http: HttpClient, private routes: Router, private userService: UserService) {}
  redirigirAInicioSesion() {
    this.userService.emailOrDniExists(this.correo, this.dni).subscribe(exists => {
      if (exists) {
        alert('El correo electrónico o DNI ya están en uso.');
      } else {
        const newUser = new User(
          this.generarId(),
          this.nombre,
          this.apellidos,
          this.correo,
          this.telefono,
          this.dni,
          this.accountType === 'one' ? 'Comprador' : 'Organizador',
          this.contrasena,
          false,
          this.nivel = 0,
          this.createday = this.onlyDate.toLocaleDateString()
        );

        this.userService.createUser(newUser).subscribe(response => {
          console.log(response);
          this.routes.navigate(['/login']);
        }, error => {
          console.log(error);
        });
      }
    });
  }
  generarId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
  todosLosCamposCompletos(): boolean {
    return !!this.nombre && !!this.apellidos && !!this.correo && !!this.telefono && !!this.dni && !!this.contrasena && !!this.Repcontrasena;
  }
  datosValidos(): boolean {
    const nombreValido = /^[a-zA-Z ]*$/.test(this.nombre);
    const apellidosValidos = /^[a-zA-Z ]*$/.test(this.apellidos);
    const correoValido = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(this.correo);
    const telefonoValido = /^[0-9]*$/.test(this.telefono);
    const dniValido = /^[0-9]*$/.test(this.dni);
    const contrasenaValida = this.contrasena.length >= 6;

    return nombreValido && apellidosValidos && correoValido && telefonoValido && dniValido && contrasenaValida;
  }
  passwordsMatch(): boolean {
    return this.contrasena === this.Repcontrasena;
  }
}
