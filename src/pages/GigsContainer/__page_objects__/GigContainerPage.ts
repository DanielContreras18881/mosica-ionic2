import {PageObject} from '../../../__mocks__/__page_objects__/PageObject';
import {By} from '@angular/platform-browser';

export class GigsContainerPage extends PageObject{
  constructor(public fixture) {
    super(fixture)
  }

  clickFirstGig() {
    const button = this.fixture.nativeElement.querySelector('.gig');
    button.click();
    this.fixture.detectChanges()
  }
}

export function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}
