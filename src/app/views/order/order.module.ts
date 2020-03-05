import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OrderPageRoutingModule } from './order-routing.module';
import { OrderPage } from './order.page';
import { OrderDetailComponent } from '../../orders/order-detail/order-detail.component';
@NgModule({
  declarations: [
    OrderPage,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule
  ],
  exports: [
    OrderDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class OrderPageModule {}