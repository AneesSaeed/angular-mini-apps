import { Component, computed, effect, signal } from '@angular/core';
import { SquareComponent } from '../square-component/square-component';
import { SquareValue } from '../model/tic-tac-toe.types';
import confetti from 'canvas-confetti';

@Component({
  imports: [SquareComponent],
  selector: 'app-board-component',
  styleUrl: './board-component.scss',
  templateUrl: './board-component.html',
})
export class BoardComponent {
  
  squares = signal<SquareValue[]>(Array(9).fill(null));
  isPlayerX = signal<boolean>(true)
  
  winner = computed(() => {
    return this.calculateWinner(this.squares());
  })

  constructor() {
    effect(() => {
      const winningPlayer = this.winner();
      
      if (winningPlayer) {
        this.launchConfetti();
      }
    });
  }

  isDraw = computed(() => {
    const hasNoWinner = this.winner() == null;
    const boardIsfull = this.squares().every(square => square != null)

    return hasNoWinner && boardIsfull;
  })

  handleMove(index: number) {
    if (this.winner() || this.isDraw() || this.squares()[index] != null) {
      return
    }

    const currentSquares = [...this.squares()]; 
    currentSquares[index] = this.isPlayerX() ? 'X' : 'O';

    this.squares.set(currentSquares);
    this.isPlayerX.update(isX => !isX);
  }

  calculateWinner(squares: Array<SquareValue>): SquareValue {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Returns 'X' or 'O'
      }
    }

    return null;
  }


  startNewGame() {
    this.squares.set(Array(9).fill(null))
    this.isPlayerX.set(true);
  }

  private launchConfetti(): void {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}
