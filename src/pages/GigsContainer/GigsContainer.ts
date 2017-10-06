import { Component } from '@angular/core';
import * as core from 'mosica-core';
import {MosicaRouter} from '../../services/MosicaRouter';

@Component({
  selector: 'page-list',
  templateUrl: 'gigs-container.html'
})
export class GigsContainer {
  currentDays: any
  isLoading: Boolean = true
  constructor(public mosicaRouter: MosicaRouter,
              public gigService: core.GigService) {


    gigService.retrieveNextGigs().then((gigsByDay) => {
      this.currentDays = gigsByDay
      this.isLoading = false
    });
  }

  open(event, gig) {
    this.mosicaRouter.navigateToGig(gig);
  }

  async onSearch(event) {
    this.currentDays = await this.gigService.searchGigsGroupedByDay(event.target.value);
  }
}
