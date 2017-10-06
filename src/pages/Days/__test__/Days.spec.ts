import {TestBed, async} from '@angular/core/testing';
import {Days} from '../Days';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import * as core from 'mosica-core';
import {fakeGigsByDay} from './fake-gigs-by-day';
import {DaysPage} from '../__page_objects__/DaysPage';
import {MosicaRouter} from '../../../services/MosicaRouter';

describe('Days', () => {

  let fixture, page;
  const navigateToGigSpy = jest.fn()
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        Days
      ],
      providers: [
        {provide: MosicaRouter, useValue: { navigateToGig: navigateToGigSpy} },
        {provide: core.GigService, useClass: core.GigService},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Days);
    page = new DaysPage(fixture)
  }));


  it('matches full snapshot', async() => {
    await page.updateAsync()
    page.matchSnapshot()
  });

  it('shows all gigs in first day', async() => {
    const FIRST_DAY_GIG_TEXTS = fakeGigsByDay[0].gigs.map(
      gig => gig.title + ' - ' + gig.place)
    await page.updateAsync()
    FIRST_DAY_GIG_TEXTS.map((text) =>
      page.containsText(text)
    )
  });

  it('navigates to first gig detail', async () => {
    const FIRST_GIG = fakeGigsByDay[0].gigs[0]
    await page.updateAsync()
    page.clickFirstGig();
    expect(navigateToGigSpy).toHaveBeenCalledWith(FIRST_GIG);
  });

  //
  // it('navigates to second gig detail', async () => {
  //   const SECOND_GIG_ID = '2222222'
  //   page.clickSecondGig();
  //   expect(navigateToGigMock).toHaveBeenCalledWith(SECOND_GIG_ID);
  // });

});
