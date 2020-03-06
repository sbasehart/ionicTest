import { Client } from 'src/app/classes/clients';

export const Clients: Client[] = [
    {
        id: 12345,
        name: 'Living Spaces',
        address1: '123 this place',
        address2: 'suite A',
        city: 'Rialto',
        state: 'CA',
        zip: 91764,
        phone1: '999-999-999',
        phone2: '999-999-999',
        email: 'test@test.com',
        joinedDate: null,
        leftDate: null,
        notes: "Notes go here",
        locations: Location[this.locationService.getLocationsByClient()],
    }
]