import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import localePt from '@angular/common/locales/pt';
import { NgxPaginationModule } from 'ngx-pagination';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    NgxPaginationModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ]
})
export class MovieModule { }
