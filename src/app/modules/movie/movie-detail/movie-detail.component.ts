import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieDetail } from 'src/app/core/model/movie-datail.model';
import { MovieService } from 'src/app/core/service/movie.service';
import { MovieConstants } from '../movie.constants';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail: MovieDetail;

  idMovie: number;

  table_head = MovieConstants.HEAD_LABEL_TABLE;
  titleGeneric = MovieConstants.GENERIC_TITLE_MOVIE;
  descGeneric = MovieConstants.GENERIC_DESCRIPTION_MOVIE;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private movieService: MovieService, 
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getDetailMovie();
  }

  getDetailMovie(): void {
    let id = this.getIdFromUrl();
    this.movieService.getDetailMovie(id).subscribe((data) => {
      if(data) {
        this.movieDetail = data;
        this.calcProfit(data);
        setTimeout(() => {
          this.spinner.hide();
        }, 500);
      }
    })
  }

  getIdFromUrl(): number {
    this.activatedRoute.params.subscribe(params => {
      this.idMovie = +params['id'];
      console.log('Id routeparam - ', this.idMovie);
    });
    return this.idMovie;
  }

  calcProfit(data: MovieDetail): void {
    let profitCalc = data.revenue - data.budget;
    this.movieDetail.profit = profitCalc;
  }

}
