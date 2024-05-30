import { Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { Entrada } from "../shared/models/Entrada";
import { EntradaService } from "../services/entrada/entrada.service";
import { MatButtonModule } from "@angular/material/button";
import { NgForOf } from "@angular/common";

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

  constructor(private entradaService: EntradaService) { }

  ngOnInit() {
    this.getEntradas();
  }

  getEntradas() {
    this.entradaService.getEntradas().subscribe((entradas) => {
      this.entradas = entradas;
    });
  }

  trackByEntradaId(index: number, entrada: Entrada): number {
    return entrada.id;
  }
}
