import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import {MapService} from '../../services/MapService';

@Component({
  selector: 'page-gig',
  templateUrl: 'gig-detail.html'
})
export class GigPage {
  gig: any;

  constructor(public navParams: NavParams, public mapService: MapService) {
    this.gig = navParams.get('gig');
  }

  openAffiliate() {
    window.open(this.gig.affiliate_url, '_blank', 'location=yes');
  }

  downloadICS() {
    const BASE_URL = "http://www.mosica.es/";
    var download_url = BASE_URL + "conciertos/" + this.gig.slug + ".ics"
    window.open(download_url, '_system');
  }

  openMap() {
    console.log('KIO');
    const url = "https://www.google.es/maps/place/" + this.gig.lat_lng;
    this.mapService.open(url);
  }

}
