import { inject, Service } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { TodoItem } from '../components/todo-item/todo-item';

@Service()
export class TodosService {
    http = inject(HttpClient);

    getTodosFromApi() {
        const url = "https://jsonplaceholder.typicode.com/todos"
        return this.http.get<Array<Todo>>(url)
    }
}
