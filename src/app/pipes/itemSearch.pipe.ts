import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemSearch'
})
export class ItemSearch implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === '') {
      return items;
    } else {
      return items.filter(source => {
        return items.name.toLowerCase().includes(term.toLowerCase())
      })
    }
  }

}
