import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

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

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.country = navParams.get('country');
    this.network = navParams.get('network');
    this.date = navParams.get('date');
    this.packet = navParams.get('packet');
  }

}
