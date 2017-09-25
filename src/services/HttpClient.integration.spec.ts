import {TestBed, async} from '@angular/core/testing';
import {HttpClient} from './HttpClient';
import {JsonpModule} from '@angular/http';

const GIGS_URL = 'http://www.mosica.es/api/1/gigs';

describe('HttpClient', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [JsonpModule],
      providers: [HttpClient]
    });
  }));

  it('returns a list of gigs', async() => {
    const httpClient = TestBed.get(HttpClient);

    const gigs = await httpClient.get(GIGS_URL);

    expect(gigs.length).toBeGreaterThan(0);
    expect(gigs[0].day).toBeDefined();
    expect(gigs[0].gigs.length).toBeGreaterThan(0);
  });
});
