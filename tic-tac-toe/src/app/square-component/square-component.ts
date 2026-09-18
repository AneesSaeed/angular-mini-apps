import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-square-component',
  styleUrl: './square-component.scss',
  templateUrl: './square-component.html',
})
export class SquareComponent {
  value = input<'X' | 'O' | null>(null)
  buttonClicked = output<void>();

  onButtonClicked() {
    this.buttonClicked.emit()
  }
}
