import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {Category} from "../models/category.enum";

@Injectable()
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product>{
  return [
    new Product('Monitor LG', 'Full HD', 7500, Category.ELECTRONICS, true),
    new Product('Ipad', 'Air 2', 12000, Category.ELECTRONICS, true),
    new Product('DJI Mavic Pro', 'Quadrocopter', 45000, Category.ELECTRONICS, true),
    new Product('Soap', 'Safeguard', 25, Category.CONSUMER_GOODS, true),
    new Product('Pringles', 'Best for football', 65, Category.FOOD, true),
    new Product('Coca Cola', 'Drink of champions', 15, Category.FOOD, true),
  ];
}


}
