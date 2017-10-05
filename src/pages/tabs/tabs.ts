import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { GeolocationPage } from '../Geolocation/Geolocation';
import {GigsContainer} from '../GigsContainer/GigsContainer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GigsContainer;
  tab2Root = GeolocationPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
