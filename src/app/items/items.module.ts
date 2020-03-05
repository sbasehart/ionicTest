import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsPage } from '../items/items.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ItemsPage }])
  ],
  declarations: [ItemsPage, ItemDetailComponent]
})

export class ItemsPageModule {


}
