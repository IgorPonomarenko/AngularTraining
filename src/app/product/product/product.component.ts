import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../models/product.model";
import {CartService} from "../../cart-module/cart-service/cart.service";
import {Inventory} from "../models/inventory";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Inventory;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuyProduct(product: Inventory){
    product.quantity = product.quantity -1;
    this.cartService.addProduct(product.product);
  }
}
