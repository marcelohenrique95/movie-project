import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/core/model/movie.model';
import { MovieService } from 'src/app/core/service/movie.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  @Output() listFiltered: EventEmitter<Movie[]> = new EventEmitter<Movie[]>();
  @Input() listMovie: Movie[] = [];

  fb: FormGroup;

  listBkp: Movie[] = [];
  listFilter: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.fb = new FormGroup({
      search: new FormControl([''])
    });
  }

  searchByName(): void {
    if (this.listBkp.length === 0) {
      this.listBkp = this.listMovie;
    }
    let valueSearch = this.fb.get('search')?.value;
    console.log(valueSearch);
    if (valueSearch == '') {
      this.listFiltered.emit([]);
    }
    if (this.listMovie) {
      this.listFilter = [];
      this.listBkp.find(element => {
        if (element.title.toLowerCase().includes(valueSearch.toLowerCase())) {
          this.listFilter.push(element);
        }
      });
      this.listFiltered.emit(this.listFilter);
    }
  }

}
