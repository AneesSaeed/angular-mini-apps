import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.scss',
  templateUrl: './counter.html',
})
export class Counter {
  counterValue = signal(0)

  incrementCounter() {
    this.counterValue.update(val => val + 1)
  }

  resetCounter() {
    this.counterValue.set(0)
  }

  decrementCounter() {
    this.counterValue.update(val => val - 1)
  }
}
