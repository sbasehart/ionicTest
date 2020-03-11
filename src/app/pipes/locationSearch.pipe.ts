import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locationSEarch'
})


export class LocationSearch implements PipeTransform {

  transform(locations: any, term: any): any {
    if (term === '') {
      return locations;
    } else {
      return locations.filter(source => {
        return locations.name.toLowerCase().includes(term.toLowerCase())
      })
    }
  }

}
