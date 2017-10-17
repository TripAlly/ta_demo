import { Component } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard';

@Component({
  selector: 'page-ally',
  templateUrl: 'ally.html',
})
export class AllyPage {
  address = '0x31b5e97294e1afd6fff6ffe4cba89a344555f753';

  constructor(private clipboard: Clipboard) {
  }

  copy() {
    console.log(this.clipboard);
    this.clipboard.copy(this.address);
  }

}
