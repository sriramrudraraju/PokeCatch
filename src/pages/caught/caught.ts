import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CaughtPokemon } from '../../services/caughtPokemon';
import { CaughtPokemonModel } from '../../model/caughtPokemon'


@Component({
  selector: 'page-caught',
  templateUrl: 'caught.html'
})
export class CaughtPage {

  caughtPokemonArray: CaughtPokemonModel[] = [];

  constructor(public navCtrl: NavController, 
              private caughtPokemonService: CaughtPokemon) {

  }

  ionViewWillEnter(){
    this.caughtPokemonArray = this.caughtPokemonService.getCaughtPokemon();
  }

}
