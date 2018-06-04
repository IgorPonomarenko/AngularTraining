import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from "./cart-service/cart.service";
import {CartComponent} from "./cart/cart.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CartComponent],
  declarations: [CartComponent],
  providers: [CartService]
})
export class CartModule { }
