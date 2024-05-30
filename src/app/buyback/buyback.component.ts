import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {Entrada} from "../shared/models/Entrada";
import {EntradaService} from "../services/entrada/entrada.service";
import {EntradaDetailsComponent} from "../resale/entrada-details/entrada-details.component";
import {MatDialog} from "@angular/material/dialog";

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
export class BuybackComponent implements OnInit{
  entradas: Entrada[] = [];

  constructor(private entradaService: EntradaService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getEntradas();
  }

  getEntradas() {
    this.entradaService.getEntradas().subscribe(data => {
      this.entradas = data.filter(entrada => entrada.resold);
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
}
