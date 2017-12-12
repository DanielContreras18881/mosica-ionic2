export class PageObject {
  constructor(public fixture) {}

  async wait() {
    await flushPromises()
    this.fixture.detectChanges()
  }

  text() {
    return this.removeComments(this.fixture.nativeElement.innerHTML.trim())
  }

  removeComments(text) {
    return text.replace(/<!--[\s\S]*?-->/g,'')
  }

  changeInput(inputName, inputValue) {
    this.fixture.componentInstance[inputName] = inputValue
    this.fixture.detectChanges()
  }

  containsText(text) {
    expect(this.text()).toContain(text)
  }

  notContainsText(text) {
    expect(this.text()).not.toContain(text)
  }

  matchSnapshot() {
    expect(this.text()).toMatchSnapshot()
  }
}

export function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}
