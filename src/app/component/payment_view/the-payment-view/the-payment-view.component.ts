import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';

import {CartService} from "../../../services/cart/cart.service";
import {Cart} from "../../../shared/models/Cart";
import {PaymentMethodService} from "../../../services/payment/payment-method.service";
import {Bill} from "../../../shared/models/Bill";
import {BillService} from "../../../services/bill/bill.service";
import {BuyDialogComponent} from "../buy-dialog/buy-dialog.component";
import {ErrorDialogComponent} from "../error-dialog/error-dialog.component";


@Component({
  selector: 'app-the-payment-view',
  standalone: true,
  imports: [FormsModule, CommonModule,MatDialogModule],
  templateUrl: './the-payment-view.component.html',
  styleUrl: './the-payment-view.component.css'
})
export class ThePaymentViewComponent implements OnInit{
  cardNumber!: string;
  cardCvv!: string;
  cardOwner!: string;
  cart!: Cart;
  bill: Bill=new Bill()
  creditCards: any[] = [];

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.bill = this.billService.getBillData();  // Retrieve the bill data

  }
  constructor(
    private cartservice: CartService,
    private matDialog: MatDialog,
    private billService: BillService,
    private paymentMethodService: PaymentMethodService,

  ) {
    this.setCart();
    this.setCreditCards();
  }
  setCreditCards() {
    this.paymentMethodService.getCreditCards().subscribe(cards => {
      this.creditCards = cards;
    });
  }
  createBill(){
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
      productName: item.product.name,
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
  OpenDialog() {
    this.matDialog.open(BuyDialogComponent),{
      width: '250px',
    };
  }
  setCart() {
    this.cart = this.cartservice.getCart();
  }

  generateBill() {
    const card = this.creditCards.find(card => card.owner === this.cardOwner && card.number === this.cardNumber && card.cvv === this.cardCvv);

    if (card) {
      this.OpenDialog();
      this.createBill();
    } else {
      this.matDialog.open(ErrorDialogComponent, {
        data: {message: 'Los datos de la tarjeta no son válidos'}
      });
    }
  }
}
