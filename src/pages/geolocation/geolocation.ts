import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '../../services/GeolocationService';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage implements OnInit {

  geolocation;

  constructor(private geolocationService: GeolocationService) {}

  async ngOnInit() {
    this.geolocation = await this.geolocationService.currentPosition();
    console.log('Fetching geolocation', this.geolocation);
  }
}
