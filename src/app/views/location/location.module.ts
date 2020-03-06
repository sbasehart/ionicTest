import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationPageRoutingModule } from './location-routing.module';
import { LocationPage } from './location.page';
import { LocationDetailComponent } from 'src/app/components/location-detail/location-detail.component';
@NgModule({
  declarations: [
    LocationPage,
    LocationDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule
  ],
  exports: [
    LocationDetailComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LocationPageModule {}
