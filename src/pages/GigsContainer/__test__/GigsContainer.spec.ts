import {TestBed, async} from '@angular/core/testing';
import {GigsContainer} from '../GigsContainer';
import {NavController} from 'ionic-angular';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import * as core from 'mosica-core';
import {fakeGigsByDay} from './fake-gigs-by-day';
import {GigsContainerPage} from '../__page_objects__/GigContainerPage';

describe('Gigs Container', () => {

  const navControllerStub = {};
  const gigServiceStub = { retrieveNextGigs: () => Promise.resolve(fakeGigsByDay)};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        GigsContainer
      ],
      providers: [
        {provide: NavController, useValue: navControllerStub},
        {provide: core.GigService, useValue: gigServiceStub},
      ]
    }).compileComponents();
  }));

  it('shows all gig texts', async() => {
    const FIRST_DAY_GIG_TEXTS = fakeGigsByDay[0].gigs.map(
      gig => gig.title + ' - ' + gig.place)
    const fixture = TestBed.createComponent(GigsContainer);
    const page = new GigsContainerPage(fixture)
    await page.updateAsync()
    FIRST_DAY_GIG_TEXTS.map((text) =>
      page.containsText(text)
    )
  });
});
