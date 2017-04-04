import { Component } from '@angular/core';

import { PokedexPage } from '../pokedex/pokedex';
import { CaughtPage } from '../caught/caught';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PokedexPage;
  tab2Root: any = CaughtPage;
  tab3Root: any = MapPage;

  constructor() {

  }
}
