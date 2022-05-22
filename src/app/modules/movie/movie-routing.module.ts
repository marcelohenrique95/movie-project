import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  {
    path: '',
    component: MovieComponent,
    children: [
      {
        path: '',
        component: MovieListComponent
      },
      {
        path: 'movie-list',
        component: MovieListComponent
      },
      {
        path: 'movie-detail',
        component: MovieDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
