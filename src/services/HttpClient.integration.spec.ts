import {TestBed, async} from '@angular/core/testing';
import {HttpClient} from './HttpClient';
import {ConnectionBackend, HttpModule, Jsonp, JsonpModule} from '@angular/http';

describe('HttpClient', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, JsonpModule],
      providers: [HttpClient]
    });
  }));

  it('returns a list of items', async() => {
    const httpClient = TestBed.get(HttpClient);

    const gigs = await httpClient.get('http://www.mosica.es/api/1/gigs');

    expect(gigs.length).toBeGreaterThan(0);
    expect(gigs[0].day).toBeDefined();
    expect(gigs[0].gigs.length).toBeGreaterThan(0);
  });
});
