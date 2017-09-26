import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { GeolocationPage } from '../geolocation/geolocation';
import {ListPage} from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = GeolocationPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
