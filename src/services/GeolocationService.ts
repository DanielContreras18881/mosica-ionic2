import {Injectable} from '@angular/core';

@Injectable()
export class GeolocationService {

  currentPosition() {
    return new Promise(function(resolve,reject){
      navigator.geolocation.getCurrentPosition(resolve,reject);
    }).then((result: any) => {
      return {latitude: result.coords.latitude, longitude: result.coords.longitude};
    });
  }

  // Example of promisify that would just work if getCurrentPosition was a node style function with callbacks
  // https://github.com/petkaantonov/bluebird/issues/1179
  // currentPositionWithPromisify() {
  //   const getCurrentPosition = promisify(navigator.geolocation.getCurrentPosition);
  //   getCurrentPosition().then((result: any) => {
  //       return {latitude: result.coords.latitude, longitude: result.coords.longitude};
  //     });
  // }
}
