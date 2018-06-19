import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseHoverDirective } from './mouse-hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MouseHoverDirective],
  exports: [MouseHoverDirective]
})
export class SharedModule { }
