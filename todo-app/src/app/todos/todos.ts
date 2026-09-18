import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { TodoItem } from "../components/todo-item/todo-item";

@Component({
  imports: [TodoItem],
  selector: 'app-todos',
  styleUrl: './todos.scss',
  templateUrl: './todos.html',
})
export class Todos implements OnInit{
  todoService = inject(TodosService)
  todoItems = signal<Array<Todo>>([])

  ngOnInit(): void {
    this.todoService.getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos)
      })
  }

  
  updateToggleState(todoitem: Todo) {
      this.todoItems.update((todos) => {
        return todos.map(todo => {
          if (todo.id === todoitem.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo;
        })
      })
  }
}
