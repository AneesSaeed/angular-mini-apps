import { Component, input, output } from '@angular/core';
import { SquareValue } from '../model/tic-tac-toe.types';

@Component({
  imports: [],
  selector: 'app-square-component',
  styleUrl: './square-component.scss',
  templateUrl: './square-component.html',
})
export class SquareComponent {
  value = input<SquareValue>(null)
  buttonClicked = output<void>();

  onButtonClicked() {
    this.buttonClicked.emit()
  }
}
