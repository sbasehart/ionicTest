import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdersPage } from './orders.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { OrderAddPage } from './order-add/order-add.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: OrdersPage }])
  ],
  declarations: [OrdersPage, OrderAddPage]
})
export class OrdersPageModule {}
