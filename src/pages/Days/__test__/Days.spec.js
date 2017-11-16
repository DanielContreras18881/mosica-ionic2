import {async, TestBed} from '@angular/core/testing'
import {Days} from '../Days'
import * as core from 'mosica-core'
import {fakeGigsByDay, FIRST_DAY_GIG_TEXTS} from './fake-gigs-by-day'
import {DaysPage} from '../__page_objects__/DaysPage'
import {MosicaRouter} from '../../../services/MosicaRouter'
import {Wrap} from '../../../test/helpers'

describe('Days', async () => {

  let fixture, page
  const navigateToGigSpy = jest.fn()
  beforeEach(async(async() => {

  const providers = [
        {provide: MosicaRouter, useValue: { navigateToGig: navigateToGigSpy} },
        {provide: core.GigService, useClass: core.GigService},
      ]

    Wrap(Days).withProviders(providers)
      .mount()

    fixture = TestBed.createComponent(Days)
    page = new DaysPage(fixture)
  }))

  fit('matches full snapshot', async() => {
    await page.updateAsync()
    page.matchSnapshot()
  })

  it('shows all gigs in first day', async() => {
    await page.updateAsync()
    FIRST_DAY_GIG_TEXTS.map((text) =>
      page.containsText(text)
    )
  })

  it('navigates to first gig detail', async () => {
    const FIRST_GIG = fakeGigsByDay[0].gigs[0]
    await page.updateAsync()
    page.clickFirstGig()
    expect(navigateToGigSpy).toHaveBeenCalledWith(FIRST_GIG)
  })

  //
  // it('navigates to second gig detail', async () => {
  //   const SECOND_GIG_ID = '2222222'
  //   page.clickSecondGig()
  //   expect(navigateToGigMock).toHaveBeenCalledWith(SECOND_GIG_ID)
  // })
})
