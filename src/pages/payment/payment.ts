import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ThanksPage } from '../thanks/thanks';
import { BalancePage } from '../balance/balance';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  thanksPage = ThanksPage;
  balancePage = BalancePage;

  country:any = null;
  network:any = null;
  date:any = null;
  packet:any = {};

  constructor(public navParams: NavParams, public navCtrl: NavController) {
    this.country = navParams.get('country');
    this.network = navParams.get('network');
    this.date = navParams.get('date');
    this.packet = navParams.get('packet');

    console.log(this.country);
    console.log(this.network);
    console.log(this.date);
    console.log(this.packet);
  }



}
