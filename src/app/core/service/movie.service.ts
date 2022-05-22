import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../model/movie-datail.model';
import { Movie } from '../model/movie.model';

@Injectable()
export class MovieService {

   constructor(private http: HttpClient) {}

    public getListMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(environment.url.popular_movies);
    }

    public getDetailMovie(id: number): Observable<MovieDetail> {
        let keyApi = '?api_key=43a66c57dc5742d89d017d146c50f869&language=pt-BR';
        return this.http.get<MovieDetail>(environment.url.detail_movie + id + keyApi);
    }
}