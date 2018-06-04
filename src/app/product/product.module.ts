import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {ProductListComponent} from "./product-list/product-list.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
