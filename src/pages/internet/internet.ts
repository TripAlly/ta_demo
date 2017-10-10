import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PaymentPage } from '../payment/payment'

@Component({
  selector: 'page-internet',
  templateUrl: 'internet.html'
})
export class InternetPage {
  paymentPage = PaymentPage;

  constructor(public navCtrl: NavController) {

  }

}
