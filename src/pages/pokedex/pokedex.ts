import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ModalController, LoadingController, ToastController } from "ionic-angular";

import { PokemonPage } from '../pokemon/pokemon'

import { PokemonNamesAndImages } from '../../services/pokemonNamesAndImages';

@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html'
})
export class PokedexPage implements OnInit {

  scrollLimit: number = 12;
  pokemonDataArray = [];

  constructor(public navCtrl: NavController, 
              private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private pokemonInfoService: PokemonNamesAndImages) {

  }

  ngOnInit() {
    this.pokemonDataArray = this.pokemonInfoService.getAllPokemonData()
    // instead of pulling whole data, pull only finite data using infinite scroll
    //this.pokemonDataArray = this.pokemonInfoService.getAllPokemonData().splice(0,this.scrollLimit);
  }

  clickPokemon(pokemonInfo){
    const modal = this.modalCtrl.create(PokemonPage,
      {pokemonDetails: pokemonInfo});
    modal.present();
  }


doInfinite(infiniteScroll) {
  // createing async feel to push each pokemon into displaying array
    setTimeout(() => {
      this.pokemonDataArray.push( ...this.pokemonInfoService.getAllPokemonData().splice(this.pokemonDataArray.length,this.scrollLimit) );
      infiniteScroll.complete();
    }, 500);
  }




// search bar implementation
// onInput(ev) {
//     // Reset items back to all of the items
//     this.pokemonDataArray = this.pokemonInfoService.getAllPokemonData();

//     // set val to the value of the searchbar
//     let val = ev.target.value;


//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
//       var filteredArray = this.pokemonDataArray.splice().map((pokemon, index, array) => {


//           if ( pokemon.name.match("/"+ val +"/") ){
//               return pokemon;
//           }
        
//       })
//       this.pokemonDataArray = filteredArray

//     }
//   }



}
