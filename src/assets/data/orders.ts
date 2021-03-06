import { Order } from 'src/app/classes/orders';
import { Item } from 'src/app/classes/items';
import { Items } from './items';

export const Orders: Order[] = [
    {
    id: 1235,
    customerId: '12365',
    salesPerson: 'Brianna',
    status: 'active',
    soNumber: 5472,
    itemCount: 2,
    items: Items,
    orderDate: {monthName: 'March', month: 2, day: 6, year: 2017},
    pickupDate: {monthName: 'March', month: 2, day: 6, year: 2017},
    deliverDate: {monthName: 'March', month: 2, day: 6, year: 2017},
    orderAmount: 70,
    receiptImageLocation: 'https://media.istockphoto.com/photos/shopping-receipt-picture-id901964616?k=6&m=901964616&s=612x612&w=0&h=RmFpYy9uDazil1H9aXkkrAOlCb0lQ-bHaFpdpl76o9A=',
    receiptNotes: 'new order',
    rating: '4',
    clientId: '5646',
    clientLocationId: 'fafa',
    isPickedUp: true,
    isDelivered: false,
 },
 {
    id: 1645,
    customerId: '16489',
    salesPerson: 'Brianna',
    status: 'active',
    soNumber: 3456,
    itemCount: 2,
    items: Items,
    orderDate: {monthName: 'March', month: 2, day: 6, year: 2017},
    pickupDate: {monthName: 'March', month: 2, day: 6, year: 2017},
    deliverDate: {monthName: 'March', month: 2, day: 6, year: 2017},
    orderAmount: 70,
    receiptImageLocation: 'https://media.istockphoto.com/photos/shopping-receipt-picture-id901964616?k=6&m=901964616&s=612x612&w=0&h=RmFpYy9uDazil1H9aXkkrAOlCb0lQ-bHaFpdpl76o9A=',
    receiptNotes: 'new order 2',
    rating: '4',
    clientId: '5646',
    clientLocationId: 'fafa',
    isPickedUp: true,
    isDelivered: true,
 }
]