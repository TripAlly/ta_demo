import { Component } from '@angular/core';
import { Platform, NavParams, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class ThanksPage {
  homePage = HomePage;

  country:any = null;
  network:any = null;
  date:any = null;
  packet:any = {};

  public unregisterBackButtonAction: any;

  constructor(public navParams: NavParams, public navCtrl: NavController, public platform: Platform) {
    this.country = navParams.get('country');
    this.network = navParams.get('network');
    this.date = navParams.get('date');
    this.packet = navParams.get('packet');
  }

  ionViewDidEnter() {
      this.initializeBackButtonCustomHandler();
  }

  ionViewWillLeave() {
      this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }

  public initializeBackButtonCustomHandler(): void {
      this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
          this.customHandleBackButton();
      }, 10);
  }

  private customHandleBackButton(): void {
    console.log('Block hardware backBtn...')
  }

}
