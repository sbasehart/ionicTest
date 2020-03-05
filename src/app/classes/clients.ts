import * as _ from 'lodash';
import { Locations }  from '../assets/data/locations'

export class Client {

    id: number
    name: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: number;
    phone1: string;
    phone2: string;
    email: string;
    joinedDate: Date;
    leftDate: Date;
    notes: string;
    locations: any[];

    constructor(joinedDate: Date) {
        if ( _.isEmpty(joinedDate) ) {
            this.joinedDate = new Date(Date.now())
        } else {
            this.joinedDate = joinedDate;
        }
    }
}