import { Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { ProductsComponent } from './component/pages/products/products.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';
import { ProductdetailsComponent } from './component/pages/productdetails/productdetails.component';
import { CheckoutComponent } from './component/pages/checkout/checkout.component';
import {ContactComponent} from "./component/pages/contact/contact.component";
import {OthersComponent} from "./component/test/others/others.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductdetailsComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'others', component: OthersComponent },

];
