import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { Entrada } from "../../shared/models/Entrada";
import {SuccessComponent} from "../success/success.component";

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
  constructor(
    public dialogRef: MatDialogRef<TermsComponent>,
    @Inject(MAT_DIALOG_DATA) public entrada: Entrada,
    private dialog: MatDialog
    ) {}

  cancel(): void {
    this.dialogRef.close();
  }

  accept(entrada: Entrada): void {
    this.dialogRef.close(); // Cerrar el diálogo actual

    // Abrir el diálogo de éxito
    this.dialog.open(SuccessComponent, {
      data: entrada
    });
  }
}
