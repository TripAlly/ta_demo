import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PaymentPage } from '../payment/payment'

@Component({
  selector: 'page-internet',
  templateUrl: 'internet.html'
})
export class InternetPage {
  paymentPage = PaymentPage;

  countries = [
    {
      id: 'th',
      title: 'Thailand',
      networks: [
        {
          id: 'dt',
          title: 'DTAC'
        }
      ]
    },
    {
      id: 'la',
      title: 'Laos',
      networks: [
        {
          id: 'be',
          title: 'Beeline'
        },
        {
          id: 'et',
          title: 'ETL'
        }
      ]
    },
    {
      id: 'my',
      title: 'Myanmar',
      networks: [
        {
          id: 'te',
          title: 'Telenor'
        }
      ]
    },
    {
      id: 'ca',
      title: 'Cambodia',
      networks: [
        {
          id: 'sm',
          title: 'Smart Axiata'
        },
        {
          id: 'ce',
          title: 'Cellcard'
        }
      ]
    },
    {
      id: 'vi',
      title: 'Vietnam',
      networks: [
        {
          id: 'vi',
          title: 'Vietell'
        }
      ]
    },
    {
      id: 'ma',
      title: 'Malaysia',
      networks: [
        {
          id: 'di',
          title: 'DiGi'
        }
      ]
    },
    {
      id: 'si',
      title: 'Singapore',
      networks: [
        {
          id: 'si',
          title: 'Singtel'
        }
      ]
    },
    {
      id: 'ch',
      title: 'China',
      networks: [
        {
          id: 'cm',
          title: 'China Mobile'
        }
      ]
    },
    {
      id: 'ja',
      title: 'Japan',
      networks: [
        {
          id: 'au',
          title: 'Au byKDDI'
        }
      ]
    },
    {
      id: 'ho',
      title: 'Hong Kong SAR',
      networks: [
        {
          id: 'cmh',
          title: 'China Mobile HK'
        }
      ]
    }
  ];

  selectedCountry = {
    id: '',
    title: '',
    networks: []
  };

  selectedNetwork:any = null;
  selectedDate:any = null;

  constructor(public navCtrl: NavController) {

  }

  payNow() {
    // console.log(this.selectedCountry)
    // console.log(this.selectedNetwork)
    // console.log(this.selectedDate)

    this.navCtrl.push(this.paymentPage, {
      country: this.selectedCountry,
      network: this.selectedNetwork,
      date: this.selectedDate,
    })
  }

}
