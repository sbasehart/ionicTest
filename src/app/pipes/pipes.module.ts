import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSearch, OrderSearch, LocationSearch } from './search.pipe';
import { SortByStopPipe } from "./sort-by-stop.pipe";

@NgModule({
  declarations: [ItemSearch, SortByStopPipe, OrderSearch, LocationSearch],
  imports: [
  ],
  exports: [ItemSearch, SortByStopPipe, OrderSearch, LocationSearch]
})
export class PipesModule { }
