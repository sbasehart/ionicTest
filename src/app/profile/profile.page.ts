import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  users = [
    {
      id: 123,
      email: 'test@test.com',
      password: 'ghost123',
      salt: 'yes?',
      isAdmin: true,
      resetPassword: false,
      clientId: '12345',
      locationId: '1235',
      imageUrl: 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
    }
  ]

  constructor() {}



}
