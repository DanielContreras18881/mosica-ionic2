import {TestBed, async} from '@angular/core/testing';
import {ListPage} from './list';
import {NavController} from 'ionic-angular';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import * as core from 'mosica-core';
import {sampleGigs} from './gigs.sample';


describe('List Page', () => {

  const navControllerStub = {};
  const nextGigs = sampleGigs;

  const gigServiceStub = { retrieveNextGigs: () => Promise.resolve(nextGigs)};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        ListPage
      ],
      providers: [
        {provide: NavController, useValue: navControllerStub},
        {provide: core.GigService, useValue: gigServiceStub},
      ]
    }).compileComponents();
  }));

  it('shows list items', async(() => {
    expect.assertions(1);
    const fixture = TestBed.createComponent(ListPage);

    return gigServiceStub.retrieveNextGigs()
      .then(() => {
        fixture.detectChanges();
        expect(fixture.nativeElement.innerHTML).toContain('kase-o');
      });
  }));
});
