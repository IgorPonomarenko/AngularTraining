import {Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy} from '@angular/core';
import {Product} from "../../../product/models/product.model";
import {Inventory} from "../../../product/models/inventory";
import {MouseHoverDirective} from "../../../shared/mouse-hover.directive"

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {

  @Input()
  selectedProduct: Inventory;

  @Output() decreaseQuantity = new EventEmitter<Inventory>();
  @Output() removeFromCart = new EventEmitter<Inventory>();

  constructor() { }

  ngOnInit() {
  }

  onDecreaseQuantity(selectedProduct: Inventory){
    this.decreaseQuantity.emit(selectedProduct);
  }

  onRemoveFromCart(selectedProduct: Inventory){
    this.removeFromCart.emit(selectedProduct);
  }

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    console.log('mouseenter event on host element');
  }

}
