import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../services/data/orders.service';
import { Order } from 'src/app/classes/orders';
import { CustomDate } from 'src/app/classes/custom-date';
import * as _ from 'lodash';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})

export class OrderPage implements OnInit {

orderId: number;
order: Order;
isEdit: boolean;

constructor(
  private route: ActivatedRoute,
  private ordersService: OrdersService,
  private router: Router
) {
  	this.orderId = route.snapshot.params['id'];
}

ionViewWillEnter() {
	if ( _.isUndefined(this.orderId)) {
		// new order is created
		this.isEdit = true;
		this.order = new Order();
	} else {
		this.order = this.ordersService.getOrder(this.orderId);
	}
}

ionViewWillLeave() {
	// reset page properties for proper init/enter conditions
	this.order = undefined;
	this.orderId = undefined;
}

ngOnInit() {

}

saveOrder(value: Order) {
	if ( _.isEmpty(this.orderId) ) {
		this.ordersService.createOrder(value);
	}
	this.router.navigate(['/tabs/order']);
}

editOrder() {
	this.isEdit = true;
}

deleteOrder(value: Order) {
	this.ordersService.deleteOrder(value.id);
	this.router.navigate(['/tabs/order']);
}

}
