import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./components/product/product.component";
import {ProductListComponent} from "./components/product-list/product-list.component";

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
