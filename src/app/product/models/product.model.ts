import {Item} from "./product.interface";
export class ProductModel implements Item{

  constructor(
  public name: string,
  public description: string,
  public price: number,
  public category: string,
  public isAvailable: boolean
){}

}
