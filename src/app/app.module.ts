import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MovieService } from './core/service/movie.service';
import { MovieComponent } from './modules/movie/movie.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
