import { TestBed } from '@angular/core/testing'
import {NO_ERRORS_SCHEMA} from '@angular/core'

export function resolvedPromise(promiseResult) {
  return jest.fn(() => Promise.resolve(promiseResult))
}

export function rejectedPromise(promiseError) {
  return jest.fn(() => Promise.reject(promiseError))
}

export function wait() {
  return new Promise(resolve => setTimeout(resolve))
}

export function Wrap(component) {
  return {mount, withProviders}

  function withProviders(providers) {
    this.providers = providers
    return this
  }

  function mount() {
    return TestBed.configureTestingModule({
      declarations: [
        component
      ],
      providers: this.providers,
      schemas: [
        NO_ERRORS_SCHEMA
      ],
    }).compileComponents()
  }
}
