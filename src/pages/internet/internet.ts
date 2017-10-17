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
      id: 'ho',
      title: 'Hong Kong SAR',
      networks: [
        {
          id: 'cmh',
          title: 'China Mobile HK'
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
      id: 'vi',
      title: 'Vietnam',
      networks: [
        {
          id: 'vi',
          title: 'Vietell'
        }
      ]
    }
  ];

  packets = [
    {
      id: 1,
      days: '1',
      price: 1 // ALLY
    },
    {
      id: 2,
      days: '2',
      price: 2 // ALLY
    },
    {
      id: 3,
      days: '3',
      price: 3 // ALLY
    },
    {
      id: 4,
      days: '7',
      price: 5 // ALLY
    },
    {
      id: 5,
      days: '14',
      price: 9 // ALLY
    },
  ];

  selectedCountry = {
    id: '',
    title: '',
    networks: []
  };

  selectedNetwork:any = null;
  selectedDate:any = null;
  selectedPacket:any = {};

  constructor(public navCtrl: NavController) {
    console.log(this.selectedNetwork)
  }

  payNow() {
    console.log(this.selectedPacket)
    this.navCtrl.push(this.paymentPage, {
      country: this.selectedCountry,
      network: this.selectedNetwork,
      date: this.selectedDate,
      packet: this.selectedPacket
    })
  }

}
