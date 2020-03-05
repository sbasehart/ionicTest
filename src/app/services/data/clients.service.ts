import { Injectable } from '@angular/core';
import { Client } from '../../classes/clients';
import { Clients } from '../../assets/data/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: Client[] = Clients;

  constructor() {
    console.log(this.clients);
  }

  getClients(): any[] {
    return this.clients;
  }

  getClient(id: any): any {
    // compares URL param string to number
    const filteredClient = this.clients.filter(client => client.id == id)[0];
    return filteredClient;
  }

  createClient(newClient: Client): number {
    newClient.id = this.nextClientId();
    this.clients.push(newClient);
    return newClient.id;
  }

  deleteClient(id: any): any {
    console.log(`clients.service.deleteClient for ${id}`);
    const index = this.clients.map(client => {
      return client.id;
    }).indexOf(id);
    this.clients.splice(index, 1);
  }
  
  nextClientId(): number {
    const maxClientId = this.clients.reduce((max, client) => (client.id > max) ? client.id : max, this.clients[0].id);
    const newClientId = (maxClientId + 1);
    return newClientId;
  }
}