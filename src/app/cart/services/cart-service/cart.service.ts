import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ProductModel} from "../../../product/.";
import {Inventory} from "../../../product/models/inventory";

@Injectable()
export class CartService {

  cartProducts:  Array<Inventory> = [];
  purchaseSubject = new Subject();

  constructor() {
  }

  addProduct(product: ProductModel, quantity: number){
    let isProductInCart = false;

    this.cartProducts.forEach(item => {
      if(item.product === product){
        item.quantity = (quantity + item.quantity);
        isProductInCart = true;
      }
      });
    if (!isProductInCart){
      this.cartProducts.push(new Inventory(product,quantity));
    }
    this.purchaseSubject.next();
  }

  decreaseCount(product: ProductModel){
    this.cartProducts.forEach(item => {
      if(item.product === product && item.quantity > 0){
        item.quantity --;
        if(item.quantity == 0){
          this.removeFromCart(product);
        }
      }
    });
    this.purchaseSubject.next();
  }

  removeFromCart(product: ProductModel){
    let itemToRemove = this.cartProducts.find(item => item.product === product);
    if (itemToRemove) {
      this.cartProducts.splice(this.cartProducts.indexOf(itemToRemove),1);
    }

    this.purchaseSubject.next();
  }

  getCartCount(): number{
    let count = 0;
    this.cartProducts.forEach(item => {
      count += item.quantity;
    });
    return count;
  }

  getCartTotal(): number{
    let total = 0;
    this.cartProducts.forEach(item => {
      total += item.quantity * item.product.price;
    });
    return total;
  }

}
