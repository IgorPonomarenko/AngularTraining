import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Product} from "../../product/models/product.model";

@Injectable()
export class CartService {

  private purchaseSubject = new Subject<Product>();
  observablePurchase = this.purchaseSubject.asObservable();

  constructor() {
  }

  addProduct(product: Product){
    this.purchaseSubject.next(product);
  }

}
