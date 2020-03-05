import { Component, OnInit } from '@angular/core';
import { Location } from '../classes/locations';
import { LocationsService } from '../services/data/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: 'locations.page.html',
  styleUrls: ['locations.page.scss']
})

export class LocationsPage implements OnInit {

  locations: Location[] = []

  constructor(private locationsService: LocationsService) {}
  
  ngOnInit() {
    this.locations = this.locationsService.getLocations()
  }
}
