import {Component, OnInit, Input} from '@angular/core';
import {Product} from "../models/product.model";
import {CartService} from "../cart-service/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onBuyProduct(product: Product){
    this.cartService.addProduct(product);
    //TODO Don't understand why it prints in log full product with all elements in first line and returns "underfined" instead of "product.name" on the second line
    console.log('Product Component: ', product);
    console.log('Product Component: ', product.name);
  }
}
