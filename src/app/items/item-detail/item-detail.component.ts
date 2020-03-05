import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'src/app/services/data/items.service';
import { Item } from 'src/app/classes/items';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})

export class ItemDetailComponent implements OnInit {

  item: Item[] = [  ]

  constructor( private itemService: ItemsService) { }

  ngOnInit() {
    this.item = this.itemService.getItem()
  }

}
