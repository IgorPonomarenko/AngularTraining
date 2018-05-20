import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {Subject} from "rxjs";

@Injectable()
export class CartService {

  private purchaseSubject = new Subject<Product>();
  addedProduct = this.purchaseSubject.asObservable();

  constructor() {
  }

  addProduct(product: Product){
    console.log("Cart Service ", product);
    console.log("Cart Service ", product.name);
    this.purchaseSubject.next(product);
  }

}
