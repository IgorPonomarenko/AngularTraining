import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product.model";
import {CartService} from "../cart-service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectedProducts: Array<Product> = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.observablePurchase.subscribe(addedProduct => {
      this.selectedProducts.push(addedProduct);
      }
    )
  }

}
