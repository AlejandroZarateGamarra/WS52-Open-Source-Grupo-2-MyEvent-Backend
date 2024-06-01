import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {Entrada} from "../shared/models/Entrada";
import {EntradaService} from "../services/entrada/entrada.service";
import {EntradaDetailsComponent} from "../resale/entrada-details/entrada-details.component";
import {MatDialog} from "@angular/material/dialog";
import {SuccessComponent} from "../resale/success/success.component";
import {TermsComponent} from "../resale/terms/terms.component";

@Component({
  selector: 'app-buyback',
  standalone: true,
  imports: [
    MatCard,
    MatButton,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf
  ],
  templateUrl: './buyback.component.html',
  styleUrl: './buyback.component.css'
})
export class BuybackComponent{
  entradas: Entrada[] = [];

  constructor(private entradaService: EntradaService, private dialog: MatDialog) {
    this.entradaService.getEntradas().then((entradaList: Entrada[]) => {
      this.entradas = entradaList.filter(e => e.state === 2)
    })
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
  }
}
