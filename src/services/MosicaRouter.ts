import {Injectable} from '@angular/core';
import {GigPage} from '../pages/GigsDetail/GigDetail';
import {App, NavController} from 'ionic-angular';

@Injectable()
export class MosicaRouter {
  constructor(private app: App) {}

  // We should inject controller instead of App:
  // https://github.com/ionic-team/ionic/issues/9581
  navCtrl(): NavController {
    return this.app.getRootNav();
  }

  navigateToGig(gig) {
    this.navCtrl().push(GigPage, {
      gig: gig
    });
  }
}
