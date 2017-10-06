import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { GeolocationPage } from '../Geolocation/Geolocation';
import {Days} from '../Days/Days';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Days;
  tab2Root = GeolocationPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
