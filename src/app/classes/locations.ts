import * as _ from 'lodash';

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
    addedDate: Date;
    removedDate: Date;
    notes: string;
    active: boolean;

    constructor(addedDate: Date) {
        if ( _.isEmpty(addedDate) ) {
            this.addedDate = new Date(Date.now())
        } else {
            this.addedDate = addedDate;
        }
    }
}