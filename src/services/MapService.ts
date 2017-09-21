import {Injectable} from '@angular/core';

@Injectable()
export class MapService {

  open(url) {
    window.open(url, '_blank', 'location=yes');
  }
}
