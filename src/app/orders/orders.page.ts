import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/orders';
import { OrdersService } from '../services/data/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})

export class OrdersPage implements OnInit {

  orders: Order[] = []

  constructor(private ordersService: OrdersService) {}
  
  ngOnInit() {
    this.orders = this.ordersService.getOrders()
  }
}
