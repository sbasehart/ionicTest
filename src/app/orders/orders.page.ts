import { Component, OnInit } from '@angular/core';
import { Order } from '../classes/orders';
import { OrdersService } from '../services/data/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: 'orders.page.html',
  styleUrls: ['orders.page.scss']
})

export class OrdersPage implements OnInit {

  orders: Order[] = [];
  public toggled: boolean = false;
  term = ''

  constructor(private ordersService: OrdersService) {
    this.toggled = false;
  }
  
  ngOnInit() {
      this.orders = this.ordersService.getOrders().sort((a, b) => {
        return <any>new Date(b.createdDate) - <any>new Date(a.createdDate);
      });
  }

  public toggle(): void {
    this.toggled = !this.toggled;
 }

 cancelSearch() {
  this.toggled = !this.toggled;
 }


}
