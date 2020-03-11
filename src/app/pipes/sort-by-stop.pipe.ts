import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByStop'
})
export class SortByStopPipe implements PipeTransform {

  transform(Item: any, stopId: Number) {
     sort((a,b) => a.stopId.localeCompare(b.stopId));
   }

}
