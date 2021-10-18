import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnhover]'
})
export class OnhoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onOver() {
    this.el.nativeElement.style.backgroundColor = 'gray';
  }

  @HostListener('mouseout') onOut() {
    this.el.nativeElement.style.backgroundColor = '#4db8ff';
  }
}
