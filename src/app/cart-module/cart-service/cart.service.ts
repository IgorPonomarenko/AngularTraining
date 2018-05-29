import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Product} from "../../models/product.model";

@Injectable()
export class CartService {

  private purchaseSubject = new Subject<Product>();
  observablePurchase = this.purchaseSubject.asObservable();

  constructor() {
  }

  addProduct(product: Product){
    console.log("Cart Service ", product);
    console.log("Cart Service ", product.name);
    this.purchaseSubject.next(product);
  }

}
