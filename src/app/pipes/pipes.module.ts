import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSearch } from './itemSearch.pipe';
import { OrderSearch } from './orderSearch.pipe';
import { LocationSearch } from './locationSearch.pipe';

import { SortByStopPipe } from "./sort-by-stop.pipe";

@NgModule({
  declarations: [ItemSearch, SortByStopPipe, OrderSearch, LocationSearch],
  imports: [
  ],
  exports: [ItemSearch, SortByStopPipe, OrderSearch, LocationSearch]
})
export class PipesModule { }
