import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

export interface User  {
    id: number;
    name: string;
    email: string;
    username: string;
}
@Service()
export class SearchService {
    private http = inject(HttpClient);
    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    searchApi(term: string): Observable<User[]>{
        return this.http.get<User[]>(`${this.apiUrl}?name_like=${encodeURIComponent(term)}`)
    }
}
