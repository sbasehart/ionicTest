import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationsService } from '../../services/data/locations.service';
import { Location } from 'src/app/classes/locations';
import { CustomDate } from 'src/app/classes/custom-date';
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

constructor(
  private route: ActivatedRoute,
  private locationsService: LocationsService,
  private router: Router
) {
  	this.locationId = route.snapshot.params['id'];
}

ionViewWillEnter() {
	if ( _.isUndefined(this.locationId)) {
		// new location is created
		this.isEdit = true;
		this.location = new Location();
	} else {
		this.location = this.locationsService.getLocation(this.locationId);
	}
}

ionViewWillLeave() {
	// reset page properties for proper init/enter conditions
	this.location = undefined;
	this.locationId = undefined;
}

ngOnInit() {

}

saveLocation(value: Location) {
	if ( _.isEmpty(this.locationId) ) {
		this.locationsService.createLocation(value);
	}
	this.router.navigate(['/tabs/location']);
}

editLocation() {
	this.isEdit = true;
}

deleteLocation(value: Location) {
	this.locationsService.deleteLocation(value.id);
	this.router.navigate(['/tabs/location']);
}

}