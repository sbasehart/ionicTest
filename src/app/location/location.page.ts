import { Component, OnInit } from '@angular/core';
import { Location } from '../classes/locations';
import { LocationsService } from '../services/data/locations.service';

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html',
  styleUrls: ['location.page.scss']
})

export class LocationPage implements OnInit {

  locations: Location[] = []

  constructor(private locationsService: LocationsService) {}
  
  ngOnInit() {
    this.locations = this.locationsService.getLocations()
  }
}
