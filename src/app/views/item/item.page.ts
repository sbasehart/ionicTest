import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/data/items.service';
import { Item } from 'src/app/classes/items';
import * as _ from 'lodash';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})


export class ItemPage implements OnInit {

  itemId: number;
  item: Item;
  isEdit: boolean;

  constructor(
    public activatedRoute: ActivatedRoute,
    private itemsService: ItemsService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.itemId = this.activatedRoute.snapshot.params['id'];
    if ( _.isUndefined(this.itemId)) {
      this.isEdit = true;
      this.item = new Item();
    } else {
      this.item = this.itemsService.getItem(this.itemId);
    }
  }

  ionViewWillLeave() {
    this.item = undefined;
    this.itemId = undefined;
  }

  ngOnInit() { }

  saveItem(value: Item) {
    if ( _.isEmpty(this.itemId) ) { 
      this.itemsService.createItem(value);
    }
    this.router.navigate(['/tabs/item']);
  }

  editItem(value: Item) {
    this.isEdit = true;
  }

  deleteItem(value: Item) {
    this.itemsService.deleteItem(value.id);
    this.router.navigate(['/tabs/item']);
  }
}