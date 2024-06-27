import { CommonModule } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../../shared/models/Product';
import { ProductsServices } from '../../../services/products/products.services';
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
export class ProductsComponent implements OnInit {
  arrProduct: Product[] = [];

  constructor(
    private productServices: ProductsServices,
    private cartService: CartService
  ) {
    this.productServices.getAllEvents().subscribe((productList: Product[]) => {
      this.arrProduct = productList;
    });
  }

  ngOnInit(): void {
    // Aquí puedes poner cualquier código que necesites ejecutar cuando se inicializa el componente
  }

  addCartItem(product: Product) {
    this.cartService.addToCart(product);
  }
}
