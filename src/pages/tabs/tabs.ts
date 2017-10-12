import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'bottom-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  aboutRoot = AboutPage;
  contactRoot = ContactPage;
  profileRoot = ProfilePage;

  constructor() {

  }
}
