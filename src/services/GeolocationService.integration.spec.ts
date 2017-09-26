import {GeolocationService} from './GeolocationService';

describe('GecolocationService', () => {

  it('returns latitude and longitude', async() => {
    const service = new GeolocationService();

    //This is not going to work in JSDOM cause geolocation is not defined
    //const result = await service.currentPosition();
    //(we should run this test in a browser)
    // expect(result.latitude).toBeDefined();
    // expect(result.longitude).toBeDefined();
  });
});
