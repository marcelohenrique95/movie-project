import { Component, Input, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
