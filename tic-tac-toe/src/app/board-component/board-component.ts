import { Component, signal } from '@angular/core';
import { SquareComponent } from '../square-component/square-component';

@Component({
  imports: [SquareComponent],
  selector: 'app-board-component',
  styleUrl: './board-component.scss',
  templateUrl: './board-component.html',
})
export class BoardComponent {
  
  squares = signal(Array(9).fill(null));
  winner = signal<'X' | 'O' | null>(null)
  isPlayerX = signal<boolean>(true)

  handleMove(index: number) {
    const currentSquares = [...this.squares()]; 
    if (currentSquares[index] != null) {
      return
    }

    currentSquares[index] = this.isPlayerX() ? 'X' : 'O';
    this.squares.set(currentSquares);

    this.isPlayerX.set(!this.isPlayerX());
  }
}
