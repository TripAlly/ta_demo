import { Component } from '@angular/core';

import { ThanksPage } from '../thanks/thanks';

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
  thanksPage = ThanksPage;

  constructor() {
  }

}
