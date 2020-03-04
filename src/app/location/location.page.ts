import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss']
})
export class LocationPage {

  locations = [
    {
      _id: 'fafa',
      name: 'Rialto',
      storeNumber: '12324',
      address1: '111 Orange dr',
      address2: 'st 405',
      city: 'rialto',
      state: 'CA',
      zip: '56452',
      phone1: '999-999-999',
      phone2: '999-999-999',
      contact: 'Person',
      email: 'test@test.com',
      addedDate: ('2016-01-16T16:00:00'),
      removedDate: ('2016-12-16T16:00:00'),
      notes: 'thissss',
      active: false,
    },
    {
      _id: 'fafa',
      name: 'Pomona',
      storeNumber: '12324',
      address1: '111 Blue dr',
      address2: 'st 405',
      city: 'Pomona',
      state: 'CA',
      zip: '52645',
      phone1: '999-999-999',
      phone2: '999-999-999',
      contact: 'People',
      email: 'test@test.com',
      addedDate: ('2016-01-16T16:00:00'),
      removedDate: (''),
      notes: 'that',
      active: true,
    }
  ]

  constructor() {}

}
