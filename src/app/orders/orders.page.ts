import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})
export class OrdersPage {

  orders = [
    {
    _id: '',
    customerId: '',
    salesPerson: '',
    status: '',
    soNumber: 5472,
    itemCount: 2,
    items: [
      
    ],
    orderDate: Date,
    pickupDate: Date,
    deliverDate: Date,
    orderAmount: 50,
    receiptImageLocation: '',
    receiptNotes: '',
    rating: '',
    clientId: '',
    clientLocationId: '',
    isPickedUp: true,
    isDelivered: false,
    }
  ]

  constructor() {}

}
