import {Component, Inject} from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Entrada} from "../../shared/models/Entrada";

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: Entrada
  ) {}

  close(entrada: Entrada): void { // Emitir evento de actualización

    if (entrada.state === 1) {
      entrada.state = 2; // Cambiar el estado de la entrada
    }
    else if (entrada.state === 2) {
      entrada.state = 3; // Cambiar el estado de la entrada
    }
    this.dialogRef.close();
  }
}
