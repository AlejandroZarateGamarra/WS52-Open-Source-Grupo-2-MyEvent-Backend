import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButton} from "@angular/material/button";
import { UserService } from '../services/user/user.services';
import { User } from '../shared/models/User';

import {NgIf} from "@angular/common";
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    MatButton,
    NgIf,

  ],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
  user: User | undefined = undefined;

  constructor(private router: Router, private userService: UserService) {
  }
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }


  cancelarSuscripcion(){

  }

  renovarSuscripcion(){

  }
}
