import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../../shared/models/Product';
import { ProductServices } from '../../../services/products/products.services';
import { CartService } from '../../../services/cart/cart.service';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {EventService} from "../../../services/event/event.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, MatCard, MatCardHeader, MatCardImage, MatCardContent, MatCardActions, MatButton, MatCardTitle,
  MatCardSubtitle],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit{
  pruductArr: Product[] = [];

 /*
  constructor(
    private productServices: ProductServices,
    private cartservice: CartService
  ) {
    this.productServices.getAllProducts().then((productList: Product[]) => {
      this.pruductArr = productList;
    });
  }
  addCartItem(product: Product) {
    this.cartservice.addToCart(product);
  }
  */

  //------------------

  events: any = [];

  constructor(private eventService: EventService){ }

  ngOnInit(): void {
    this.listEvents();
  }

  listEvents(){
    this.eventService.getAllEvents().subscribe(
      data => {
        this.events = data;
        console.log(this.events);
      }
    );
  }
}
