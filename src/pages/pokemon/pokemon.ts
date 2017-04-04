import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


import { PokiApiServices } from '../../services/pokeApi';


@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html'
})
export class PokemonPage {
  public pokemonData: any;
  more: boolean;
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private pokeApiService: PokiApiServices) {

         
         this.pokemonData = this.navParams.get('pokemonDetails'); 

    
    }

    ngOnInit() {
      this.more = false;
    }


  tapAbility(abilityNumber){
    if(abilityNumber === 0){
      this.adiingAbilitiesToPokemonData(this.pokemonData.fromApi.abilities[0].ability.url, 'ability1')
    }
    else if(abilityNumber === 1){
      this.adiingAbilitiesToPokemonData(this.pokemonData.fromApi.abilities[1].ability.url, 'ability2')
    }
  }  

  tapMove(moveNumber){
    this.pokeApiService.getMoveDataById(this.pokemonData.fromApi.moves[moveNumber].move.url)
      .subscribe(
      // on success response
      (data) => {
        this.pokemonData[moveNumber] = data;
        console.log(this.pokemonData);
      },
      // on error reponse
      (err)=>{
        console.log(err.message)
      });
  }

  adiingAbilitiesToPokemonData(url, abilityName){
    this.pokeApiService.getAbilityDataById(url)
      .subscribe(
      // on success response
      (data) => {
        this.pokemonData[abilityName] = data;
        console.log(this.pokemonData);
      },
      // on error reponse
      (err)=>{
        console.log(err.message)
      });
  }

  ionViewDidLoad() {
    //call poke api service...
    this.pokeApiService.getPokemonDataById(this.pokemonData.id)
    .subscribe(
      // on success response
      (data) => {
        this.pokemonData.fromApi = data;
        console.log(this.pokemonData);
      },
      // on error reponse
      (err)=>{
        console.log(err.message)
      });
    }

  clickClose(){
    this.viewCtrl.dismiss();
  }

}
