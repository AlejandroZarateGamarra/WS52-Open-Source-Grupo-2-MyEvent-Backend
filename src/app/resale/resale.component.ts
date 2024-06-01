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
import {SharedService} from "../services/shared/shared.service";

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
export class ResaleComponent {
  entradas: Entrada[] = [];

  constructor(
    private entradaService: EntradaService,
    private dialog: MatDialog
  ) {
    this.getEntradas();
  }

  getEntradas(): void {
    this.entradaService.getEntradas().then((entradaList: Entrada[]) => {
      this.entradas = entradaList.filter(e => e.state === 1)
    })
  }

  refreshList(): void {
    this.getEntradas();
  }

  openDetails(entrada: Entrada) {
    this.dialog.open(EntradaDetailsComponent, {
      data: entrada
    });
  }

  openTerms(entrada: Entrada): void {
    this.dialog.open(TermsComponent, {
      data: entrada
    });
  }
}
