import { Component, OnInit } from '@angular/core';
import { Item } from '../classes/items';
import { ItemsService } from '../services/data/items.service';

@Component({
  selector: 'app-items',
  templateUrl: 'items.page.html',
  styleUrls: ['items.page.scss']
})

export class ItemsPage implements OnInit {

  items: Item[] = []

  constructor(private itemsService: ItemsService) {}
  
  ngOnInit() {
    this.items = this.itemsService.getItems()
  }
}
