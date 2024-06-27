import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../shared/components/base-form.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { SignUpRequest } from '../../model/sign-up.request';
import {MatCard, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from "@angular/material/card";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatButton,
    NgIf,
    MatFormFieldModule,
    MatCardModule
  ],
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  submitted= false;

  constructor(private builder: FormBuilder, private AuthenticationService: AuthenticationService){
    super();
  }

  ngOnInit(): void {
      this.form= this.builder.group({
        name:['', Validators.required],
        surname:['', Validators.required],
        correo:['', Validators.required],
        phone:['', Validators.required],
        dni:['', Validators.required],
        tipoDeCuenta:['', Validators.required],
        password:['', Validators.required],
        premium:['', Validators.required]

      })
  }

  onSubmit(){
    if(this.form.invalid) return;
    let name= this.form.value.name;
    let surname= this.form.value.surname;
    let correo= this.form.value.correo;
    let password= this.form.value.password;
    let phone= this.form.value.phone;
    let dni= this.form.value.dni;
    let tipoDeCuenta= this.form.value.tipoDeCuenta;
    let premium= this.form.value.premium;
    const signUpRequest = new SignUpRequest(name, surname, correo,password, phone, dni, tipoDeCuenta, premium);
    this.AuthenticationService.signUp(signUpRequest);
    this.submitted= true;
  }

}
