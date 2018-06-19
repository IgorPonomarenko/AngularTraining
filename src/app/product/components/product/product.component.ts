import {
  Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild,
  ChangeDetectionStrategy
} from '@angular/core';
import {Inventory} from "../../models/inventory";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input()
  product: Inventory;

  @Output() buyProduct = new EventEmitter<Inventory>();

  @ViewChild("productName") productNameEl: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.productNameEl.nativeElement.style.cursor = "pointer";
  }

  onBuyProduct(product: Inventory){
    this.buyProduct.emit(product);
  }
}
