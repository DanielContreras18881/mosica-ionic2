import {async} from '@angular/core/testing'
import {Days} from '../Days'
import * as core from 'mosica-core'
import {fakeGigsByDay, FIRST_DAY_GIG_TEXTS} from './fake-gigs-by-day'
import {DaysPage} from '../__page_objects__/DaysPage'
import {MosicaRouter} from '../../../services/MosicaRouter'
import {Wrap} from '../../../test/helpers'

describe('Days', async () => {

  let page
  const navigateToGigSpy = jest.fn()
  beforeEach(async(async() => {

    const providers = [
        {provide: MosicaRouter, useValue: { navigateToGig: navigateToGigSpy} },
        {provide: core.GigService, useClass: core.GigService},
      ]

    const wrapper = await Wrap(Days).withProviders(providers)
      .mount()

    page = new DaysPage(wrapper)
  }))

  it('shows all gigs in first day', async() => {
    await page.wait()
    FIRST_DAY_GIG_TEXTS.map((text) =>
      page.containsText(text)
    )
  })

  it('navigates to first gig detail', async () => {
    const FIRST_GIG = fakeGigsByDay[0].gigs[0]
    await page.wait()
    page.clickFirstGig()
    expect(navigateToGigSpy).toHaveBeenCalledWith(FIRST_GIG)
  })

  fit('matches full snapshot', async() => {
    await page.wait()
    page.matchSnapshot()
  })

  //
  // it('navigates to second gig detail', async () => {
  //   const SECOND_GIG_ID = '2222222'
  //   page.clickSecondGig()
  //   expect(navigateToGigMock).toHaveBeenCalledWith(SECOND_GIG_ID)
  // })
})
