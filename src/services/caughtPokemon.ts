import { CaughtPokemonModel } from '../model/caughtPokemon'

export class CaughtPokemon {
    caughtPokemon: CaughtPokemonModel[] = [];

    addCaughtPokemon(name, id, iv, path){
        this.caughtPokemon.push(new CaughtPokemonModel(name, id, iv, path));
    }

    getCaughtPokemon(){
       return  this.caughtPokemon.slice();
    }

}