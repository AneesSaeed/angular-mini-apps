import { Directive, effect, ElementRef, inject, input } from '@angular/core';
import { SquareValue } from '../model/tic-tac-toe.types';

@Directive({
  selector: '[symbolValue]',
})
export class SymbolStyle {
  symbolValue = input<SquareValue>(null)
  
  private el = inject(ElementRef)

  constructor() {
    effect(() => {
      const symbol = this.symbolValue();
      const hostElement =  this.el.nativeElement as HTMLElement;

      hostElement.classList.remove('symbol-x', 'symbol-o');

      if (symbol === 'X') {
        hostElement.classList.add('symbol-x');
      } else if (symbol === 'O') {
        hostElement.classList.add('symbol-o');
      }
    })
  }
}
