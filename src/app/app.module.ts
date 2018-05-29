import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {ProductsService} from "./products-service/products.service";
import { CartComponent } from './cart-module/cart/cart.component';
import {CartService} from "./cart-module/cart-service/cart.service";
import {CartModule} from "./cart-module/cart.module";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
