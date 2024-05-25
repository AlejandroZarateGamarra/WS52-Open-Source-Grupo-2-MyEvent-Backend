import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nopremium',
  standalone: true,
  imports: [],
  templateUrl: './nopremium.component.html',
  styleUrl: './nopremium.component.css'
})
export class NopremiumComponent {

  constructor(private router: Router) {
  }

  // Método para redirigir al usuario a la pantalla correspondiente
  closePanel(){
    this.router.navigate(['']);
  }

  level1(){

  }

  level2(){

  }
}
