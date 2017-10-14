import { Component } from '@angular/core';

import { CardPage } from '../card/card';
import { AllyPage } from '../ally/ally';
import { ScratchPage } from '../scratch/scratch';

@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {
  cardPage = CardPage;
  allyPage = AllyPage;
  scratchPage = ScratchPage;

  constructor() {
  }

}
