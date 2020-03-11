import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class ItemSearch implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === '') {
      return items;
    } else {
      return items.filter(source => {
        return item.name.toLowerCase().includes(term.toLowerCase())
      })
    }
  }

}

export class OrderSearch implements PipeTransform {

  transform(orders: any, term: any): any {
    if (term === '') {
      return orders;
    } else {
      return orders.filter(source => {
        return order.name.toLowerCase().includes(term.toLowerCase())
      })
    }
  }

}

export class LocationSearch implements PipeTransform {

  transform(locations: any, term: any): any {
    if (term === '') {
      return locations;
    } else {
      return locations.filter(source => {
        return location.name.toLowerCase().includes(term.toLowerCase())
      })
    }
  }

}
