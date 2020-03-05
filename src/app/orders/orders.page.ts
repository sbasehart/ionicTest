import { Component } from '@angular/core';
import { Item } from '../items/items.page';

export const Order = [
  {
  _id: 'sdfsd',
  customerId: '12365',
  salesPerson: 'Brianna',
  status: 'active',
  soNumber: 5472,
  itemCount: 2,
  items: Item,
  orderDate: ("2020-03-04T23:38:35+00:00"),
  pickupDate: ("2020-03-05T23:38:35+00:00"),
  deliverDate: ("2020-03-05T23:38:35+00:00"),
  orderAmount: 50,
  receiptImageLocation: 'https://media.istockphoto.com/photos/shopping-receipt-picture-id901964616?k=6&m=901964616&s=612x612&w=0&h=RmFpYy9uDazil1H9aXkkrAOlCb0lQ-bHaFpdpl76o9A=',
  receiptNotes: 'new order',
  rating: '4',
  clientId: '5646',
  clientLocationId: 'fafa',
  isPickedUp: true,
  isDelivered: false,
  }
]

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})
export class OrdersPage {

  orders = []
  items = []

  constructor() {
    this.orders = Order
    this.items = Item
    console.log(this.orders)
  }


}
