import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ItemPageRoutingModule } from './item-routing.module';
import { ItemPage } from './item.page';
import { ItemDetailComponent } from '../../components/item-detail/item-detail.component';

@NgModule({
  declarations: [
    ItemPage,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule
  ],
  exports: [
    ItemDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class ItemPageModule {}