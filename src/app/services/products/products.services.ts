import { Product } from '../../shared/models/Product';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({ providedIn: 'root' })

export class ProductsServices {

  private api: string = 'http://localhost:8080/api/v1/events';

  constructor(private http:HttpClient) { }

  getAllEvents():Observable<Product []>{
    return this.http.get<Product[]>(this.api);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}/${id}`);
  }
}

/*
export class ProductServices {
  productsURL = 'http://localhost:3000/products';
  constructor() {}
  // Get all products read
  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.productsURL);
    return (await data.json()) ?? []; //return array if null data
  }
  async getProductById(Id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.productsURL}/${Id}`);
    return (await data.json()) ?? []; //return array if null data
  }

  async getLatestProduct(): Promise<Product | undefined> {
    const data = await fetch(this.productsURL);
    return (await data.json()) ?? []; //return array if null data
  }
  async getRelatedProduct(title:string): Promise<Product | undefined> {
    const data = await fetch(this.productsURL);
    return (await data.json()) ?? []; //return array if null data
  }
}
*/
