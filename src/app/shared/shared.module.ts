import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SpecialCharacterPipe } from './pipes/special-character.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    PaginationComponent,
    SearchFilterComponent,
    SpecialCharacterPipe,
    DurationPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    PaginationComponent,
    SearchFilterComponent,
    SpecialCharacterPipe,
    DurationPipe
  ]
})
export class SharedModule { }
