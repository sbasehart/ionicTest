import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocationPage } from './location.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LocationDetailComponent } from './location-detail/location-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: LocationPage }])
  ],
  declarations: [LocationPage, LocationDetailComponent]
})

export class LocationPageModule {




}
