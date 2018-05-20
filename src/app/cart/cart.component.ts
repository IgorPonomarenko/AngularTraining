import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart-service/cart.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  selectedProducts: Array<Product>;
  constructor(private cartService: CartService) {
    this.selectedProducts = new Array<Product>();
  }

  ngOnInit() {

    this.cartService.addedProduct.subscribe( addedProduct => {
      console.log('Chart Component: ', addedProduct);
      console.log('Chart Component: ', addedProduct.name);
      //TODO: why does it say that getName is not a function
      //addedProduct.getName();
      this.selectedProducts.push(addedProduct);
      }
    )
  }

}
