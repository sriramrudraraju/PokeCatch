import { Component } from '@angular/core';

import { NavController, LoadingController} from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { PokemonNamesAndImages } from '../../services/pokemonNamesAndImages';
import { CaughtPokemon } from '../../services/caughtPokemon';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
  
})
export class MapPage {
 show: boolean = true;
 lat: number;
 lng: number;
 imagePath: string;
 zoom: number = 16;
 randomNumber: number;
 iv: any;
 pokmemonName: any;
 varityOfPokemon: number = 151;

constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              private geolocation: Geolocation,
              private pokemonInfoService: PokemonNamesAndImages,
              private caughtPokemonService: CaughtPokemon) { }

getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

// on click of capture
  capture(){
    this.show= false;
    this.caughtPokemonService.addCaughtPokemon(this.pokmemonName,
    this.randomNumber, this.iv, this.imagePath)
  }  

  ionViewWillEnter() {
    this.show = true;

    // creating loader till we get the location
    const loader = this.loadingCtrl.create({
      content: 'Locating you...'
    });
    loader.present();

    // get geolocation
     this.geolocation.getCurrentPosition()
     .then((resp) => {
       console.log(resp);
       
    // exact my location
      this.lat = resp.coords.latitude ;
      this.lng = resp.coords.longitude;
      this.randomNumber = this.getRandomInt(1,this.varityOfPokemon);
      this.iv = (Math.random()*100).toFixed(2);
      this.imagePath = 'assets/pokemonSprites/'+ ('000' + this.randomNumber).slice(-3) +'.gif';
      this.pokmemonName = this.pokemonInfoService.getAllPokemonData().splice(this.randomNumber-1,1)[0].name;

      loader.dismiss();
      })
      .catch((error) => {
      loader.dismiss();
      console.log('Error getting location', error);
      });
   }        

   onSetMarker(event){
      console.log(event)
   } 



}
