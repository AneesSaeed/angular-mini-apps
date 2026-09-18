import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todos } from './todos/todos';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./home/home').then((m) => m.Home)
        }
    },
    {
        path: 'todos',
        component: Todos
    },
];
