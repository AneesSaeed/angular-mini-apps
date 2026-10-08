import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => {
            return import('./components/autocomplete-search/autocomplete-search')
                .then((m) => m.AutocompleteSearch)
        }
    }
];
