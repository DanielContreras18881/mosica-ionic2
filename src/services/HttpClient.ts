import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpClient {
  constructor(private jsonp: Jsonp) {}

  get(url) {
    return this.jsonp.request(url +'?callback=JSONP_CALLBACK')
      .map(result => {
        return { body: result.json() };
      })
      .toPromise();
  }
}
