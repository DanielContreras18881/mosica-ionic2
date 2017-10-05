import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import { GigPage } from '../GigDetail';
import {MapService} from '../../../services/MapService';

describe('GigPage', () => {

  let fixture: ComponentFixture<GigPage>;
  let instance: GigPage;

  const navControllerStub = {};
  const SELECTED_GIG = 'Pony Bravo';
  const navParamsStub = { get: () => { return { title: SELECTED_GIG}}};
  const mapServiceStub = { open: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        GigPage
      ],
      providers: [
        {provide: NavController, useValue: navControllerStub},
        {provide: NavParams, useValue: navParamsStub},
        {provide: MapService, useValue: mapServiceStub}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GigPage);
    instance = fixture.debugElement.componentInstance;
  });

  it('should create the gig page', () => {
    expect(instance).toBeTruthy();
  });

  it('should show a title', () => {
    fixture.detectChanges();
    const h1 = fixture.debugElement.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain(SELECTED_GIG);
  });

  it('opens a map', () => {
    const a = fixture.debugElement.nativeElement.querySelector('a');
    a.click();
    fixture.detectChanges();
  });

});
