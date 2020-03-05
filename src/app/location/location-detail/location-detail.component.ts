import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from 'src/app/classes/locations';
import * as _ from 'lodash';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})

export class LocationDetailComponent {
  @Input() location: Location;
  @Input() isEdit: boolean;

  @Output() saveLocationEvent = new EventEmitter<Location>();
  @Output() editLocationEvent = new EventEmitter<Location>();
  @Output() deleteLocationEvent = new EventEmitter<Location>();

  constructor() { }

  saveLocation() {
    if (!this.isValidForm()) {
      return false;
    }
    this.saveLocationEvent.emit(this.location);
  }

  editLocation() {
    this.editLocationEvent.emit(this.location);
  }

  deleteLocation() {
    this.deleteLocationEvent.emit(this.location);
  }

  isValidForm() {
    if (_.isUndefined(this.location.id)) {
      console.log(`Invalid location.id: ${this.location.id}`);
      return false;
    }
    if (_.isEmpty(this.location.id)) {
      console.log(`Invalid location.id: ${this.location.id}`);
      return false;
    }
    return true;
  }
}