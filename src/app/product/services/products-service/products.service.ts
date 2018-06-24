import { Injectable } from '@angular/core';
import {Inventory} from "../../models/inventory";
import {ProductModel} from "../../models/product.model";
import {Category} from "../../models/category.enum";

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Inventory>{
  return [
    new Inventory(new ProductModel('Monitor LG', 'Full HD', 7500, Category.ELECTRONICS, true), 2),
    new Inventory(new ProductModel('Ipad', 'Air 2', 12000, Category.ELECTRONICS, true), 2),
    new Inventory(new ProductModel('DJI Mavic Pro', 'Quadrocopter', 45000, Category.ELECTRONICS, true), 10),
    new Inventory(new ProductModel('Soap', 'Safeguard', 25, Category.CONSUMER_GOODS, true), 10),
    new Inventory(new ProductModel('Pringles', 'Best for football', 65, Category.FOOD, true), 10),
    new Inventory(new ProductModel('Coca Cola', 'Drink of champions', 15, Category.FOOD, true), 10)
  ];
}


}
