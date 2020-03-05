import { Component } from '@angular/core';
import { Item } from '../classes/items';
import { Order } from '../classes/orders';



@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})
export class OrdersPage {

  orders: Order[] = []

  constructor() {
    console.log(this.orders)
  }

}
