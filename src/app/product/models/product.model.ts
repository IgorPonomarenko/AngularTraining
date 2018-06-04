import {Item} from "./product";
export class Product implements Item{

  constructor(
  public name: string,
  public description: string,
  public price: number,
  public category: string,
  public isAvailable: boolean
){
  this.name = name;
  this.description = description;
  this.price = price;
  this.category = category;
  this.isAvailable = isAvailable;
}

 public getName(): string{
   return this.name;
}

}
