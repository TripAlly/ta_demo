import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import AccountData from '../../data/account';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  account = AccountData;

  constructor(public navCtrl: NavController) {

  }

}
