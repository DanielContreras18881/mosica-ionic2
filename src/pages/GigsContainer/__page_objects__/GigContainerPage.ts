import {PageObject} from '../../../__mocks__/__page_objects__/PageObject';

export class GigsContainerPage extends PageObject{
  constructor(public fixture) {
    super(fixture)
  }

  async updateAsync() {
    await flushPromises();
    this.fixture.detectChanges()
  }

  keepsSnapshot() {
    expect(this.text()).toMatchSnapshot()
  }

  remove_line_breaks(string) {
    return string.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }

  containsText(atext) {
    expect(this.text()).toContain(atext)
  }
}

export function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}
