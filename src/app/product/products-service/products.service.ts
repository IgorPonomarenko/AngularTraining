import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {Category} from "../models/category.enum";
import {Inventory} from "../models/inventory";

@Injectable({providedIn: 'root'})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Inventory>{
  return [
    new Inventory(new Product('Monitor LG', 'Full HD', 7500, Category.ELECTRONICS, true), 2),
    new Inventory(new Product('Ipad', 'Air 2', 12000, Category.ELECTRONICS, true), 2),
    new Inventory(new Product('DJI Mavic Pro', 'Quadrocopter', 45000, Category.ELECTRONICS, true), 10),
    new Inventory(new Product('Soap', 'Safeguard', 25, Category.CONSUMER_GOODS, true), 10),
    new Inventory(new Product('Pringles', 'Best for football', 65, Category.FOOD, true), 10),
    new Inventory(new Product('Coca Cola', 'Drink of champions', 15, Category.FOOD, true), 10)
  ];
}


}
