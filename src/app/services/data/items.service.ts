import { Injectable } from '@angular/core';
import { Item } from '../../classes/items';
import { Items } from '../../assets/data/items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items: Item[] = Items;

  constructor() {
    console.log(this.items);
  }

  getItems(): any[] {
    return this.items;
  }

  getItem(id: any): any {
    const filteredItem = this.items.filter(item => item.id == id)[0];
    return filteredItem;
  }

  createItem(newItem: Item): number {
    newItem.id = this.nextItemId();
    this.items.push(newItem);
    return newItem.id;
  }

  deleteItem(id: any): any {
    console.log(`items.service.deleteItem for ${id}`);
    const index = this.items.map(item => {
      return item.id;
    }).indexOf(id);
    this.items.splice(index, 1);
  }
  
  nextItemId(): number {
    const maxItemId = this.items.reduce((max, item) => (item.id > max) ? item.id : max, this.items[0].id);
    const newItemId = (maxItemId + 1);
    return newItemId;
  }
}