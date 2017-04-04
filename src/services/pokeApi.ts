import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class PokiApiServices {

constructor(private http: Http) {}


  getPokemonDataById(id: number) {
      return this.http.get('http://pokeapi.co/api/v2/pokemon/' + id + '/')
        .map((response: Response) => response.json());
      }

  getAbilityDataById(url: string) {
      return this.http.get(url)
        .map((response: Response) => response.json());
      }   

  getMoveDataById(url: string) {
      return this.http.get(url)
        .map((response: Response) => response.json());
      }   
}
