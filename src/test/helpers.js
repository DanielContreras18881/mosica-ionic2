import { TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core/core'
import { LoadSpinner } from '../shared/LoadSpinner'

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

  return {mount, withProps }

  function withProps(props) {
    this.props = props
    return this
  }

  function mount() {
    TestBed.configureTestingModule({
      declarations: [
        component
      ]
      // schemas: [
      //   NO_ERRORS_SCHEMA
      // ],
    }).compileComponents()
  }
}
