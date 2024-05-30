import { Injectable } from '@angular/core';
import { Entrada } from "../../shared/models/Entrada";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntradaService {
  private entradasURL = 'http://localhost:3000/entradas';

  constructor(private http: HttpClient) { }

  // Obtener todas las entradas
  getEntradas(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(this.entradasURL);
  }

  // Obtener una entrada por ID
  getEntrada(id: number): Observable<Entrada> {
    const url = `${this.entradasURL}/${id}`;
    return this.http.get<Entrada>(url);
  }

  // Crear una nueva entrada
  addEntrada(entrada: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(this.entradasURL, entrada);
  }

  // Actualizar una entrada existente
  updateEntrada(entrada: Entrada): Observable<Entrada> {
    const url = `${this.entradasURL}/${entrada.id}`;
    return this.http.put<Entrada>(url, entrada);
  }

  // Eliminar una entrada
  deleteEntrada(id: number): Observable<void> {
    const url = `${this.entradasURL}/${id}`;
    return this.http.delete<void>(url);
  }
}
