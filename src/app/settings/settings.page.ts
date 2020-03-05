import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/clients';
import { ClientsService } from '../services/data/clients.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  clients: Client[] = []

  constructor(private clientService: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientService.getClients()
  }

}
