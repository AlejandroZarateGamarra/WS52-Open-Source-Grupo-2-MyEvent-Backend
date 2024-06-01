import { Injectable } from '@angular/core';
import { Entrada } from "../../shared/models/Entrada";

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private entradasURL = 'http://localhost:3000/entradas';

  constructor() {}

  // Obtener todas las entradas
  async getEntradas(): Promise<Entrada[]> {
    const data = await fetch(this.entradasURL);
    return (await data.json()) ?? []; //return array if null data
  }

  // Obtener una entrada por ID
  async getEntrada(id: number): Promise<Entrada> {
    const data = await fetch(`${this.entradasURL}/${id}`);
    return await data.json() ?? [];
  }
}
