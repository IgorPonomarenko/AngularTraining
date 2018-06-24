import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from "./services/cart-service/cart.service";
import { CartListComponent } from './components/cart-list-component/cart-list-component.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CartListComponent],
  declarations: [CartListComponent, CartItemComponent],
  providers: [CartService]
})
export class CartModule { }
