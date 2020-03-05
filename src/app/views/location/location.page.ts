import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../../services/data/locations.service';
import { Location } from 'src/app/classes/locations';
import * as _ from 'lodash';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})


export class LocationPage implements OnInit {

  locationId: number;
  location: Location;
  isEdit: boolean;
  addedDate: Date;

  constructor(
    public activatedRoute: ActivatedRoute,
    private locationsService: LocationsService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.locationId = this.activatedRoute.snapshot.params['id'];
    if ( _.isUndefined(this.locationId)) {
      this.isEdit = true;
      this.location = new Location(this.addedDate);
    } else {
      this.location = this.locationsService.getLocation(this.locationId);
    }
  }

  ionViewWillLeave() {
    this.location = undefined;
    this.locationId = undefined;
  }

  ngOnInit() { }


  saveLocation(value: Location) {
    if ( _.isEmpty(this.locationId) ) { 
      this.locationsService.createLocation(value);
    }
    this.router.navigate(['/tabs/location']);
  }

  editLocation(value: Location) {
    this.isEdit = true;
  }

  deleteLocation(value: Location) {
    this.locationsService.deleteLocation(value.id);
    this.router.navigate(['/tabs/location']);
  }
}