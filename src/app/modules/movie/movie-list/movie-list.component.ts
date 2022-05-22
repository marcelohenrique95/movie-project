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

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit(): void {
    this.listMovies();
  }

  listMovies(): void {
    this.movieService.getListMovies().subscribe((data: any) => {
      if(data){
        this.list_movies = data.results;
        console.log('Lista de filmess', this.list_movies);
      }
    })
  }

  goToDetail(movie: Movie): void {
    localStorage.setItem('movie', JSON.stringify(movie));
    this.router.navigate(['movie/movie-detail'], { state: { data: movie }});
  }

}
