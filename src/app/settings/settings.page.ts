import { Component, OnInit } from '@angular/core';
import { Client } from '../classes/clients';
import { ClientsService } from '../services/data/clients.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  // clients: Client[] = []
  // userId = null;

  constructor(private clientService: ClientsService, private storage: Storage) { }

  async ngOnInit() {
  //   this.clients = this.clientService.getClients()
  //   this.userId = this.route.snapshot.params.id || await this.storage.get("USER_ID");;
  }

}
