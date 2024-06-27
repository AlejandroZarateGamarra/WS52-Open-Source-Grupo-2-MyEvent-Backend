import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/pages/home/home.component';
import { ProductsComponent } from './component/pages/products/products.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { ProductdetailsComponent } from './component/pages/productdetails/productdetails.component';
import { CheckoutComponent } from './component/pages/checkout/checkout.component';
import { LatestProductsComponent } from './component/pages/latest-products/latest-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CarouselModule ,
    LatestProductsComponent,
    HeaderComponent,
    FooterComponent,
    ProductdetailsComponent,
    CheckoutComponent,
    ProductsComponent,
    CartPageComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent{
  title = 'Angular-ECommerce';

}
