import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements  OnInit{
  formularioContacto!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formularioContacto = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motivo: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviarFormulario(event: Event) {
    if(this.formularioContacto.valid){
      event.preventDefault();
      console.log(this.formularioContacto.value);
    }
  }

  hasError(formControlName: string, errorType: string){
    return this.formularioContacto.get(formControlName)?.hasError(errorType)
      && this.formularioContacto.get(formControlName)?.touched;
  }
}
