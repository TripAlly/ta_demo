import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { ThanksPage } from '../thanks/thanks';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  thanksPage = ThanksPage;

  country:any = null;
  network:any = null;
  date:any = null;

  constructor(public navParams: NavParams) {
    this.country = navParams.get('country');
    this.network = navParams.get('network');
    this.date = navParams.get('date');

    console.log(this.country);
    console.log(this.network);
    console.log(this.date);
  }

}
