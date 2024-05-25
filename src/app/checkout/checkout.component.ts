import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {BuyDialogComponent} from "../buy-dialog/buy-dialog.component";
import {BillService} from "../services/bill/bill.service";
import { Bill } from '../shared/models/bill.model'; // Importación de la clase Bill

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule,MatDialogModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  bill: Bill=new Bill()
  constructor(
    private cartservice: CartService,
    private matDialog: MatDialog,
    private billService: BillService
  ) {
    this.setCart();
  }
  createBill() {
    const bill = new Bill();
    bill.billingDetails={
      firstName: this.bill.billingDetails.firstName,
      lastName: this.bill.billingDetails.lastName,
      company: this.bill.billingDetails.company,
      address1: this.bill.billingDetails.address1,
      address2: this.bill.billingDetails.address2,
      city: this.bill.billingDetails.city,
      state: this.bill.billingDetails.state,
      postcode: this.bill.billingDetails.postcode,
      email: this.bill.billingDetails.email,
      phone: this.bill.billingDetails.phone,
    }
    bill.orderItems = this.cart.items.map(item => ({
      productId: item.product.id,
      productName: item.product.title,
      quantity: item.quantity,
      price: item.price
    }));
    bill.totalAmount = this.cart.totalPrice;

    this.billService.createBill(bill).subscribe(response => {
      console.log('Bill created successfully', response);
    }, error => {
      console.error('Error creating bill', error);
    });
  }
  cart!: Cart;
  OpenDialog() {
    this.matDialog.open(BuyDialogComponent),{
      width: '250px',
    };
  }
  setCart() {
    this.cart = this.cartservice.getCart();
  }

  generateBill() {
    this.OpenDialog();
    this.createBill();
  }
}
