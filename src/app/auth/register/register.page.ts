import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/data/users.service';
import { User } from 'src/app/classes/users';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private registerService: UsersService) { }

  ngOnInit() {
  }

  register(ngForm) {
    this.registerService.createUser(newUser: User): 
  }

}
