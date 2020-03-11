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
  public toggled: boolean = false;


  constructor(private itemsService: ItemsService) {
    this.toggled = false;
  }
  
  ngOnInit() {
    this.items = this.itemsService.getItems()
  }
  public toggle(): void {
    this.toggled = !this.toggled;
 }

 cancelSearch() {
  this.toggled = !this.toggled;
 }
}
