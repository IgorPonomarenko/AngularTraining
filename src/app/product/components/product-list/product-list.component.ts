import {Component, OnInit, ViewChildren, QueryList, AfterViewInit} from "@angular/core";
import {ProductsService} from "../../services/products-service/products.service";
import {Inventory} from "../../models/inventory";
import {CartService} from "../../../cart/.";
import {ProductModel} from "../../models/product.model";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  @ViewChildren(ProductComponent) productsQuery: QueryList<ProductComponent>;

  products: Array<Inventory>;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  ngAfterViewInit(){
    const products: ProductComponent[] = this.productsQuery.toArray();
    for (let product of products) {
      console.log(product);
    }
  }

  onBuyProduct(product: Inventory){

    product.quantity = product.quantity -1;
    //TODO Replace second parameter with actual products number
    this.cartService.addProduct(product.product, 1);
  }



}
