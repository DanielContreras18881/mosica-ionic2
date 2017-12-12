import { PageObject } from '../../__mocks__/__page_objects__/PageObject'
import { LoadSpinner } from '../LoadSpinner'
import { Wrap } from '../../test/helpers'

describe('LoadSpinner', () => {
  let page
  beforeEach(async () => {
    Wrap(LoadSpinner).mount()
    const wrapper = await Wrap(LoadSpinner).mount()
    page = new PageObject(wrapper)
  })

  it('shows loading', async() => {
    page.changeInput('isLoading', true)
    page.containsText('Loading...')
  })

  it('does not show loading', async() => {
    page.changeInput('isLoading', false)
    page.notContainsText('Loading...')
  })
})
