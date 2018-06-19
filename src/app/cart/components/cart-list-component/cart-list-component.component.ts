import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart-service/cart.service";
import {Product} from "../../../product/models/product.model";
import {Inventory} from "../../../product/models/inventory";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.css']
})
export class CartListComponent implements OnInit {


  cartProducts: Array<Inventory> = [];
  productsInCart = 0;
  totalPrice = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.purchaseSubject.subscribe(() => {

          this.cartProducts = this.cartService.cartProducts;
          // let count = 0;
          // let sum = 0;
          //
          // for (let inventory of this.cartProducts){
          //   count += inventory.quantity;
          //   sum += inventory.product.price * inventory.quantity;
          // }
          this.productsInCart = this.cartService.getCartCount();
          this.totalPrice = this.cartService.getCartTotal();;
      }
    )
  }

  onDecreaseQuantity(selectedProduct: Inventory){
    this.cartService.decreaseCount(selectedProduct.product);
  }

  onRemoveFromCart(selectedProduct: Inventory){
    this.cartService.removeFromCart(selectedProduct.product);
  }

}
