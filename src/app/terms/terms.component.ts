import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  constructor(public dialogRef: MatDialogRef<TermsComponent>) {}

  accept(): void {
    // Aquí puedes agregar la lógica para la aceptación de los términos
    this.dialogRef.close(true); // Puedes pasar un valor de retorno si es necesario
  }
}
