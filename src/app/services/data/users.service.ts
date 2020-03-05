
import { Injectable } from '@angular/core';
import { User } from '../../classes/users';
import { CustomDate } from '../../classes/custom-date';
import { Users } from '../../assets/data/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = Users;

  constructor() {
    console.log(this.users);
  }
  getUsers(): any[] {
    return this.users;
  }
  getUser(id: any): any {
    // compares URL param string to number
    const filteredUser = this.users.filter(user => user.id == id)[0];
    return filteredUser;
  }
  createUser(newUser: User): number {
    newUser.id = this.nextUserId();
    this.users.push(newUser);
    return newUser.id;
  }
  deleteUser(id: any): any {
    console.log(`users.service.deleteUser for ${id}`);
    const index = this.users.map(user => {
      return user.id;
    }).indexOf(id);
    this.users.splice(index, 1);
  }
  nextUserId(): number {
    const maxUserId = this.users.reduce((max, user) => (user.id > max) ? user.id : max, this.users[0].id);
    const newUserId = (maxUserId + 1);
    return newUserId;
  }
}