import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movie',
    pathMatch: 'full'
  },
  {
    path: 'movie',
    loadChildren: () => import('./modules/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page-error/page-error.module').then(m => m.PageErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
