import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {

   constructor(private http: HttpClient) {}

    public getListMovies() {
        return this.http.get(environment.url.popular_movies);
    }
}