import {TestBed, async} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { PageObject } from '../../__mocks__/__page_objects__/PageObject';
import { LoadSpinner } from '../LoadSpinner';

describe('LoadSpinner', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        NO_ERRORS_SCHEMA
      ],
      declarations: [
        LoadSpinner
      ]
    }).compileComponents();
  }));


  it('snapshot when isLoading', async() => {
    let fixture = TestBed.createComponent(LoadSpinner);
    const page = new PageObject(fixture)
    page.changeInput('isLoading', true)
    page.keepsSnapshot()
  });

  it('snapshot when is NOT loading', async() => {
    let fixture = TestBed.createComponent(LoadSpinner);
    const page = new PageObject(fixture)
    page.changeInput('isLoading', false)
    page.keepsSnapshot()
  });
});

