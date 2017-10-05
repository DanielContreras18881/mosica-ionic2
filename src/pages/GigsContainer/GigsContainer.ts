import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as core from 'mosica-core';
import {GigPage} from '../GigsDetail/GigDetail';

@Component({
  selector: 'page-list',
  templateUrl: 'gigs-container.html'
})
export class GigsContainer {
  currentDays: any;

  constructor(public navCtrl: NavController,
              public gigService: core.GigService) {

    gigService.retrieveNextGigs().then((gigsByDay) => {
      this.currentDays = gigsByDay;
    });
  }

  open(event, gig) {
    this.navCtrl.push(GigPage, {
      gig: gig
    });
  }

  async onSearch(event) {
    this.currentDays = await this.gigService.searchGigsGroupedByDay(event.target.value);
  }
}
