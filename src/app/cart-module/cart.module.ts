import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from "./cart-service/cart.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CartService]
})
export class CartModule { }
