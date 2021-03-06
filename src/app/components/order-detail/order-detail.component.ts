import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/classes/orders';
import * as _ from 'lodash';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
})

export class OrderDetailComponent {
  @Input() order: Order;
  @Input() isEdit: boolean;

  @Output() saveOrderEvent = new EventEmitter<Order>();
  @Output() editOrderEvent = new EventEmitter<Order>();
  @Output() deleteOrderEvent = new EventEmitter<Order>();

  constructor(public router: Router
    ) { }

  saveOrder() {
    // if (!this.isValidForm()) {
    //   return false;
    // }
    this.router.navigateByUrl( '/tabs/orders'  );
    this.isEdit = false
    this.saveOrderEvent.emit(this.order);
  }

  editOrder() {
    this.editOrderEvent.emit(this.order);
  }

  deleteOrder() {
    this.deleteOrderEvent.emit(this.order);
    this.router.navigateByUrl( 'tabs/orders' );
  }

  isValidForm() {
    if (_.isUndefined(this.order.id)) {
      console.log(`Invalid order.id: ${this.order.id}`);
      return false;
    }
    if (_.isEmpty(this.order.id)) {
      console.log(`Invalid order.id: ${this.order.id}`);
      return false;
    }
    return true;
  }
}