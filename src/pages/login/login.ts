import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }

  makeLogin() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      dismissOnPageChange: true
    }).present();

    this.navCtrl.setRoot(TabsPage);
  }

}
