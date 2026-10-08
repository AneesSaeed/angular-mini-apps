import { Component, inject, signal } from '@angular/core';
import { SearchService } from '../../services/search-service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, distinctUntilChanged, filter, map, of, switchMap, tap } from 'rxjs';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-autocomplete-search',
  styleUrl: './autocomplete-search.scss',
  templateUrl: './autocomplete-search.html',
})
export class AutocompleteSearch {

  private searchService = inject(SearchService);
  
  searchControl = new FormControl('', { nonNullable: true})

  isLoading = signal<boolean>(false);
  errorMessage = signal<string>('');

  readonly results = toSignal(
    this.searchControl.valueChanges.pipe(
      map(term => term.trim()),
      debounceTime(300),
      distinctUntilChanged(),

      tap(term => {
        this.errorMessage.set('')
        if (term.length < 2) {
          this.isLoading.set(false)
        }
      }),

      switchMap(term => {
        if (term.length < 2) {
          return of([])
        }

        this.isLoading.set(true)

        return this.searchService.searchApi(term).pipe(
            tap(() => this.isLoading.set(false)),
            
            catchError(() => {
              this.isLoading.set(false)
              this.errorMessage.set('Something went wrong')
              return of([])
            })
          )
        }
      )
    ),
    {initialValue: []}
  )
}
