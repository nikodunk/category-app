import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[kayakMouseover]'
})


export class HighlightDirective {
  
  constructor(private el: ElementRef, private renderer: Renderer) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#b3b3b3');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(thickness: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'borderColor', thickness);
  }
}