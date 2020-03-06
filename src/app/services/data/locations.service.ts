import { Injectable } from '@angular/core';
import { Location } from '../../classes/locations';
import { Locations } from '../../../assets/data/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locations: Location[] = Locations;

  constructor() {
    console.log(this.locations);
  }
  getLocations(): any[] {
    return this.locations;
  }
  getLocation(id: any): any {
    // compares URL param string to number
    const filteredLocation = this.locations.filter(location => location.id == id)[0];
    return filteredLocation;
  }
  createLocation(newLocation: Location): number {
    newLocation.id = this.nextLocationId();
    this.locations.push(newLocation);
    return newLocation.id;
  }
  deleteLocation(id: any): any {
    console.log(`locations.service.deleteLocation for ${id}`);
    const index = this.locations.map(location => {
      return location.id;
    }).indexOf(id);
    this.locations.splice(index, 1);
  }
  nextLocationId(): number {
    const maxLocationId = this.locations.reduce((max, location) => (location.id > max) ? location.id : max, this.locations[0].id);
    const newLocationId = (maxLocationId + 1);
    return newLocationId;
  }
}