import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/clients';
import { ClientsService } from '../services/data/clients.service';
import { User } from '../classes/users';
import { UsersService } from '../services/data/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

  users: User[] = [];
  // clients: Client[] = [];
  user;
  client;

  constructor(private usersService: UsersService, private clientsService: ClientsService) {}

  ngOnInit() {
    this.getUserDetails()
    this.getClient()
  }

  getUserDetails(email: any) {
    this.user = this.usersService.getUserProfile('test@test.com')
  }

  getClient(id: any) {
    this.client = this.clientsService.getClient(this.user.clientId)
  }

}
