import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SpecialCharacterPipe } from './pipes/special-character.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    PaginationComponent,
    SearchFilterComponent,
    SpecialCharacterPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    PaginationComponent,
    SearchFilterComponent,
    SpecialCharacterPipe
  ]
})
export class SharedModule { }
