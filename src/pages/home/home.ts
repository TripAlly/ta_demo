import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }

  makeLogin() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 1000,
      dismissOnPageChange: true
    }).present();
  }

}
