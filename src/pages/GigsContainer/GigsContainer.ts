import { Component } from '@angular/core';
import * as core from 'mosica-core';
import {MosicaRouter} from '../../services/MosicaRouter';

@Component({
  selector: 'page-list',
  templateUrl: 'gigs-container.html'
})
export class GigsContainer {
  currentDays: any;

  constructor(public mosicaRouter: MosicaRouter,
              public gigService: core.GigService) {

    gigService.retrieveNextGigs().then((gigsByDay) => {
      this.currentDays = gigsByDay;
    });
  }

  open(event, gig) {
    this.mosicaRouter.navigateToGig(gig);
  }

  async onSearch(event) {
    this.currentDays = await this.gigService.searchGigsGroupedByDay(event.target.value);
  }
}
