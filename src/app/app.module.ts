import {NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { GigPage } from '../pages/GigsDetail/GigDetail';
import { GeolocationPage } from '../pages/Geolocation/Geolocation';
import { TabsPage } from '../pages/tabs/tabs';
import { GigsContainer } from '../pages/GigsContainer/GigsContainer';
import * as mosicaCore from 'mosica-core';
import {HttpClient} from '../services/HttpClient';
import {HttpModule, JsonpModule} from '@angular/http';
import {MapService} from '../services/MapService';
import {GeolocationService} from '../services/GeolocationService';
import {MosicaRouter} from '../services/MosicaRouter';
import {LoadSpinner} from '../shared/LoadSpinner';

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
    GigsContainer,
    LoadSpinner
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
    GigsContainer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    MapService,
    GeolocationService,
    MosicaRouter,
    {provide: mosicaCore.GigService,
      useFactory: gigServiceFactory,
      deps: [HttpClient]
    },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
