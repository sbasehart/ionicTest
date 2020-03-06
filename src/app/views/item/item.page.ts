import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../../services/data/items.service';
import { Item } from 'src/app/classes/items';
import { CustomDate } from 'src/app/classes/custom-date';
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
  private route: ActivatedRoute,
  private itemsService: ItemsService,
  private router: Router
) {
  	this.itemId = route.snapshot.params['id'];
}

ionViewWillEnter() {
	if ( _.isUndefined(this.itemId)) {
		// new item is created
		this.isEdit = true;
		this.item = new Item();
	} else {
		this.item = this.itemsService.getItem(this.itemId);
	}
}

ionViewWillLeave() {
	// reset page properties for proper init/enter conditions
	this.item = undefined;
	this.itemId = undefined;
}

ngOnInit() {

}

saveItem(value: Item) {
	if ( _.isEmpty(this.itemId) ) {
		this.itemsService.createItem(value);
	}
	this.router.navigate(['/tabs/item']);
}

editItem() {
	this.isEdit = true;
}

deleteItem(value: Item) {
	this.itemsService.deleteItem(value.id);
	this.router.navigate(['/tabs/item']);
}

}