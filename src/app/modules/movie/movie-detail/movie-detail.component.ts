import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/model/movie.model';
import { MovieConstants } from '../movie.constants';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: Movie;

  table_head = MovieConstants.HEAD_LABEL_TABLE;

  constructor() { }

  ngOnInit(): void {
    this.movieDetail = JSON.parse(localStorage.getItem('movie') || '');
    console.log('objeto - ', this.movieDetail);
  }

}
