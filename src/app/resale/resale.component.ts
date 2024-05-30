import { Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { Entrada } from "../shared/models/Entrada";
import { EntradaService } from "../services/entrada/entrada.service";
import { MatButtonModule } from "@angular/material/button";
import { NgForOf } from "@angular/common";
import {EntradaDetailsComponent} from "./entrada-details/entrada-details.component";
import {MatDialog} from "@angular/material/dialog";
import {TermsComponent} from "./terms/terms.component";
import {SuccessComponent} from "./success/success.component";

@Component({
  selector: 'app-resale',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgForOf
  ],
  templateUrl: './resale.component.html',
  styleUrl: './resale.component.css'
})
export class ResaleComponent implements OnInit {
  entradas: Entrada[] = [];

  constructor(private entradaService: EntradaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getEntradas();
  }

  getEntradas() {
    this.entradaService.getEntradas().subscribe(data => {
      this.entradas = data.filter(entrada => !entrada.resold);
    });
  }

  trackByEntradaId(index: number, entrada: Entrada): number {
    return entrada.id;
  }

  openDetails(entrada: Entrada) {
    this.dialog.open(EntradaDetailsComponent, {
      data: entrada
    });
  }

  openTerms(entrada: Entrada): void {
    const dialogRef = this.dialog.open(TermsComponent, {
      data: entrada
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.resold) {
        // Si la entrada ha sido revendida, actualizar la lista de entradas
        this.entradas = this.entradas.filter(e => e.id !== result.id);

        // Abrir el diálogo de éxito
        const successRef = this.dialog.open(SuccessComponent);

        successRef.afterClosed().subscribe(() => {
          // Después de cerrar el diálogo de éxito, recargar la lista
          this.getEntradas();
        });
      }
    });
  }
}
