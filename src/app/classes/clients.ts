import * as _ from 'lodash';
import { CustomDate } from './custom-date';

export class Client {

    id: number
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phone1: string;
    phone2: string;
    email: string;
    joinedDate: Date;
    leftDate: Date;
    notes: string;
    locations: Location[];

    constructor(joinedDate: Date) {
        if ( _.isEmpty(joinedDate) ) {
            this.joinedDate = new Date(Date.now())
        } else {
            this.joinedDate = joinedDate;
        }
    }
}