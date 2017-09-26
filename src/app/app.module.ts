import {NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { GigPage } from '../pages/gig/gig';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import * as mosicaCore from 'mosica-core';
import {HttpClient} from '../services/HttpClient';
import {HttpModule, JsonpModule} from '@angular/http';
import {MapService} from '../services/MapService';
import {GeolocationService} from '../services/GeolocationService';

let gigServiceFactory = (httpClient: HttpClient) => {
  return new mosicaCore.GigService(httpClient, new mosicaCore.Matcher);
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    GigPage,
    GeolocationPage,
    TabsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    JsonpModule,
    HttpModule
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    GigPage,
    GeolocationPage,
    TabsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    MapService,
    GeolocationService,
    {provide: mosicaCore.GigService,
      useFactory: gigServiceFactory,
      deps: [HttpClient]
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
