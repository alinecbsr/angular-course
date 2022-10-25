import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bkgYellow]'
  // selector: 'p[bkgYellow]'
  //Restrict usage in p tag, for example
})
export class BkgYellowDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2
  ) {

    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    // console.log(this._elementRef);

    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
