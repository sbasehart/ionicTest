import { Component, OnInit } from '@angular/core';
import { Location } from '../classes/locations';
import { LocationsService } from '../services/data/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss']
})

export class LocationPage implements OnInit {

  locations: Location[] = [];
  public toggled: boolean = false;

  constructor(private locationsService: LocationsService) {
    this.toggled = false;

  }
  
  ngOnInit() {
    this.locations = this.locationsService.getLocations()
  }

  public toggle(): void {
    this.toggled = !this.toggled;
 }

 cancelSearch() {
  this.toggled = !this.toggled;
}
}
