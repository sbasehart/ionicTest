import * as _ from 'lodash';
import { CustomDate } from './custom-date';

export class Location {
    id: number
    name: string;
    storeNumber: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    phone1: string;
    phone2: string;
    contact: string;
    email: string;
    addedDate?: CustomDate;
    removedDate?: CustomDate;
    notes: string;
    active: boolean;

    constructor(addedDate?: CustomDate) {
        if ( _.isEmpty(addedDate) ) {
            this.addedDate = new CustomDate
        } else {
            this.addedDate = addedDate;
        }
    }
}