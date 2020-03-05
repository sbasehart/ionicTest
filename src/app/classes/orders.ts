import * as _ from 'lodash'
import { Item } from './items';

export class Order {
    id: number
    customerId: string;
    salesPerson: string;
    status: string
    soNumber: number;
    itemCount: number;
    items: Item[];
    orderDate: Date;
    pickupDate: Date;
    deliverDate: Date;
    orderAmount: number;
    receiptImageLocation: string;
    receiptNotes: string;
    rating: any;
    clientId: string;
    clientLocationId: string;
    isPickedUp: boolean;
    isDelivered: boolean;

    constructor(orderDate: Date) {
        if ( _.isEmpty(orderDate) ) {
            this.orderDate = new Date(Date.now())
        } else {
            this.orderDate = orderDate;
        }
    }

}