import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { InternetPage } from '../internet/internet'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  internetPage = InternetPage;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController) {
  }

}
