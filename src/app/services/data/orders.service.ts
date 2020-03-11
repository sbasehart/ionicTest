import { Injectable } from '@angular/core';
import { Order } from '../../classes/orders';
import { Orders } from '../../../assets/data/orders';
import { Item } from 'src/app/classes/items';
import { Items } from 'src/assets/data/items';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  orders: Order[] = Orders;
  items: Item[] = Items;

  constructor() {
    console.log(this.orders);
  }

  getOrders(): any[] {
    return this.orders;
  }

  getOrder(id: any): any {
    const filteredOrder = this.orders.filter(order => order.id == id)[0];
    return filteredOrder;
  }

  createOrder(newOrder: Order): number {
    newOrder.id = this.nextOrderId();
    this.orders.push(newOrder);
    return newOrder.id;
  }

  deleteOrder(id: any): any {
    console.log(`deleted order ${id}`);
    const index = this.orders.indexOf(id);
    this.orders.splice(index, 1);
  }

  nextOrderId(): number {
    const maxOrderId = this.orders.reduce((max, order) => (order.id > max) ? order.id : max, this.orders[0].id);
    const newOrderId = (maxOrderId + 1);
    return newOrderId;
  }
}