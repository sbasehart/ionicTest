import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../services/data/orders.service';
import { Order } from 'src/app/classes/orders';
import * as _ from 'lodash';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})


export class OrderPage implements OnInit {
  orderId: number;
  order: Order;
  orderDate: Date;
  isEdit: boolean;

  constructor(
    public activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.orderId = this.activatedRoute.snapshot.params['id'];
    if ( _.isUndefined(this.orderId)) {
      this.isEdit = true;
      this.order = new Order(this.orderDate);
    } else {
      this.order = this.ordersService.getOrder(this.orderId);
    }
  }

  ionViewWillLeave() {
    this.order = undefined;
    this.orderId = undefined;
  }

  ngOnInit() { }
  saveOrder(value: Order) {
    if ( _.isEmpty(this.orderId) ) { 
      this.ordersService.createOrder(value);
    }
    this.router.navigate(['/tabs/order']);
  }

  editOrder(value: Order) {
    this.isEdit = true;
  }

  deleteOrder(value: Order) {
    this.ordersService.deleteOrder(value.id);
    this.router.navigate(['/tabs/order']);
  }
}