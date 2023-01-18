import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/core/model/movie.model';
import { CardConstants } from './card.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movie?: Movie;

  descGeneric: string = CardConstants.GENERIC_DESCRIPTION_MOVIE;
  titleGeneric: string = CardConstants.GENERIC_TITLE_MOVIE;
  isBigOverview: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.verifyLengthOverview();
  }

  goToDetail(): void {
    let id = this.movie?.id;
    this.router.navigate(['movie/' + id +'/movie-detail']);
  }

  verifyLengthOverview(): void {
    if(this.movie?.overview && this.movie?.overview.length > 340) {
      this.isBigOverview = true;
    }
  }

}
