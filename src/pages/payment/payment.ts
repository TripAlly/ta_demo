import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

import { ThanksPage } from '../thanks/thanks';
import { BalancePage } from '../balance/balance';

import AccountData from '../../data/account';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  thanksPage = ThanksPage;
  balancePage = BalancePage;

  account = AccountData;

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

  pay() {
    this.navCtrl.push(this.thanksPage, {
      country: this.country,
      network: this.network,
      date: this.date,
      packet: this.packet
    })
  }
}
