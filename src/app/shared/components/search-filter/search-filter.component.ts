import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from 'src/app/core/model/movie.model';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  @Input() listMovie: Movie[] = [];

  fb: FormGroup;

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
    console.log('Chamando search....');
    let valueSearch = this.fb.get('search')?.value;
    console.log(valueSearch);
    
    if(this.listMovie) {
      let listafind = this.listMovie.find(element => {
        element.title == valueSearch;
      })
      console.log('Includes - ', listafind);
    }
  }

}
