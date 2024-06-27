import { SignInRequest } from '../../model/sign-in.request';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BaseFormComponent } from '../../../shared/components/base-form.component';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatCardHeader,
    MatCard,
    MatInput,
    MatButton,
    NgIf,
    MatFormFieldModule,
    MatCardModule,
    RouterLink,
    MatCheckbox,
    FormsModule
  ],
  styleUrl: './sign-in.component.css'
})
export class SignInComponent extends BaseFormComponent implements OnInit {
  form!:FormGroup;
  submitted = false;
  password: string = "";
  mostrarContrasena: boolean = false;

  constructor(private router: Router, private builder: FormBuilder, private authenticationService: AuthenticationService){
    super();
  }

  ngOnInit(): void {
      this.form = this.builder.group({
        correo: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  onSubmit(){
    if(this.form.invalid) return;
    let correo= this.form.value.correo;
    let password= this.form.value.password;
    const signInRequest = new SignInRequest(correo, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted= true;
  }

  redirigirARegistro() {
    this.router.navigate(['/sign-up']);
  }

}
