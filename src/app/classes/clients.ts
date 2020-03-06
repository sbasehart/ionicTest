import * as _ from 'lodash';
import { Locations }  from '../../assets/data/locations'
import { CustomDate } from './custom-date';

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
    joinedDate: CustomDate;
    leftDate: CustomDate;
    notes: string;
    locations: any[];

    constructor(joinedDate?: CustomDate) {
        if ( _.isEmpty(joinedDate) ) {
            this.joinedDate = new CustomDate
        } else {
            this.joinedDate = joinedDate;
        }
    }
}