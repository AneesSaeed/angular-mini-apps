import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodo } from '../../model/directives/highlight-completed-todo';

@Component({
  imports: [HighlightCompletedTodo],
  selector: 'app-todo-item',
  styleUrl: './todo-item.scss',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  todoItem = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() { 
    this.todoToggled.emit(this.todoItem())
  }
}
