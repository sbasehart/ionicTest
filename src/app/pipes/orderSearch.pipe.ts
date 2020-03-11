import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSearch'
})

export class OrderSearch implements PipeTransform {

  transform(orders: any, term: any): any {
    if (term === '') {
      return orders;
    } else {
      return orders.filter(source => {
        return orders.name.toLowerCase().includes(term.toLowerCase())
      })
    }
  }

}

