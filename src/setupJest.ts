import 'jest-preset-angular';
import './jestGlobalMocks';

window['flushPromises'] = () => {
  return new Promise(resolve => setImmediate(resolve))
}
