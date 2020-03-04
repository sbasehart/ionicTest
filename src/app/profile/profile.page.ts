import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  users = [
    {
    email: 'test@test.com',
    password: '123456',
    salt: 'dsfs',
    isAdmin: true,
    resetPassword: false,
    clientId: '123123',
    locationId: 'fafa',
    }
  ]

  constructor() {}

}
