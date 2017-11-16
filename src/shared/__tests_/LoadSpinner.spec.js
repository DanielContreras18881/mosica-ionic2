import {TestBed, async} from '@angular/core/testing'
import { PageObject } from '../../__mocks__/__page_objects__/PageObject'
import { LoadSpinner } from '../LoadSpinner'
import { Wrap } from '../../test/helpers'

describe('LoadSpinner', () => {

  let fixture, page
  beforeEach(async(() => {
    Wrap(LoadSpinner).mount()
    fixture = TestBed.createComponent(LoadSpinner)
    page = new PageObject(fixture)
  }))

  it('when isLoading', async() => {
    page.changeInput('isLoading', true)
    page.containsText('Loading...')
  });

  it('when is NOT loading', async() => {
    page.changeInput('isLoading', false)
    page.notContainsText('Loading...')
  });
});
