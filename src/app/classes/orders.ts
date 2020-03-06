import * as _ from 'lodash'
import { Item } from './items';
import { CustomDate } from './custom-date';

export class Order {
    id: number
    customerId: string;
    salesPerson: string;
    status: string;
    soNumber: number;
    itemCount: number;
    items: Array<Item>;
    orderDate?: CustomDate;
    pickupDate?: CustomDate;
    deliverDate?: CustomDate;
    orderAmount: number;
    receiptImageLocation: string;
    receiptNotes: string;
    rating: any;
    clientId: string;
    clientLocationId: string;
    isPickedUp: boolean;
    isDelivered: boolean;

    constructor(orderDate?: CustomDate) {
        if ( _.isEmpty(orderDate) ) {
            this.orderDate = new CustomDate()
        } else {
            this.orderDate = orderDate;
        }
    }

}