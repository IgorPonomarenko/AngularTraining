import {Directive, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  // element: ElementRef;
  @HostBinding('class.alert-warning') private isHovering: boolean = false;

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver(){
    this.isHovering = true;
    this.el.nativeElement.style.cursor = 'not-allowed';
  }

  @HostListener('mouseout')
  onMouseOut(){
    this.isHovering = false;
    this.el.nativeElement.style.cursor = '';
  }

}
