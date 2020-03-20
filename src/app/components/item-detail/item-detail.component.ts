import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/classes/items';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})

export class ItemDetailComponent {
  @Input() item: Item;
  @Input() isEdit: boolean;

  @Output() saveItemEvent = new EventEmitter<Item>();
  @Output() editItemEvent = new EventEmitter<Item>();
  @Output() deleteItemEvent = new EventEmitter<Item>();

  constructor(public router: Router) { }

  saveItem() {
    // if (!this.isValidForm()) {
    //   return false;
    // }
    this.router.navigateByUrl( '/tabs/items'  );
    this.isEdit = false
    this.saveItemEvent.emit(this.item);
    // this.router.navigateByUrl( `item/${this.item.id}` );
  }

  editItem() {
    this.editItemEvent.emit(this.item);
  }

  deleteItem() {
    this.deleteItemEvent.emit(this.item);
    this.router.navigateByUrl( 'tabs/items' );

  }

  isValidForm() {
    if (_.isUndefined(this.item.id)) {
      console.log(`Invalid item.id: ${this.item.id}`);
      return false;
    }
    if (_.isEmpty(this.item.id)) {
      console.log(`Invalid item.id: ${this.item.id}`);
      return false;
    }
    return true;
  }
}