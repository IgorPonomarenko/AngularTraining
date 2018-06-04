import {Product} from "./product.model";
export class Inventory{
  public product: Product;
  public quantity: number;

  constructor(
    product: Product,
    quantity: number
  ){
    this.product = product;
    this.quantity = quantity;
  }
}
