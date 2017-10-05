export class GigsContainerPage {
  constructor(private fixture) {}

  async updateAsync() {
    await flushPromises();
    this.fixture.detectChanges()
  }

  text() {
    return this.fixture.nativeElement.innerHTML;
  }

  containsText(atext) {
    expect(this.text()).toContain(atext)
  }
}

export function flushPromises() {
  return new Promise(resolve => setImmediate(resolve))
}
