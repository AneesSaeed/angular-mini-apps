import { Component, signal } from '@angular/core';
import { BoardComponent } from './board-component/board-component';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  imports: [Header, BoardComponent]
})
export class App {
  protected readonly title = signal('tic-tac-toe');

}
