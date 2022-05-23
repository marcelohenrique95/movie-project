import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/model/movie.model';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  list_movies: Movie[] = [];

  n: number = 1;

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.listMovies();
  }

  receiveListFilter(event: any): void {
    this.list_movies = event;
    if(this.list_movies.length == 0) {
      this.listMovies();
    }
  }

  listMovies(): void {
    this.movieService.getListMovies().subscribe((data: any) => {
      if(data){
        this.list_movies = data.results;
        console.log('Lista de filmess', this.list_movies);
      }
    })
  }

}
