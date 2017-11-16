import {TestBed, async} from '@angular/core/testing'
import { PageObject } from '../../__mocks__/__page_objects__/PageObject'
import { LoadSpinner } from '../LoadSpinner'
import { Wrap } from '../../test/helpers'

describe('LoadSpinner', () => {

  beforeEach(async(() => {
    Wrap(LoadSpinner).mount()
  }))

  it('when isLoading', async() => {
    let fixture = TestBed.createComponent(LoadSpinner);
    const page = new PageObject(fixture)
    page.changeInput('isLoading', true)
    page.containsText('Loading...')
    //page.matchSnapshot()
  });

  it('when is NOT loading', async() => {
    let fixture = TestBed.createComponent(LoadSpinner);
    const page = new PageObject(fixture)
    page.changeInput('isLoading', false)
    page.notContainsText('Loading...')
    //page.matchSnapshot()
  });
});
