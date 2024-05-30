import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {Entrada} from "../shared/models/Entrada";

@Component({
  selector: 'app-entrada-details',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './entrada-details.component.html',
  styleUrl: './entrada-details.component.css'
})
export class EntradaDetailsComponent {
  constructor(
    public dialogRef: MatDialogRef<EntradaDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: Entrada
  ) {}

  close() {
    this.dialogRef.close();
  }
}
