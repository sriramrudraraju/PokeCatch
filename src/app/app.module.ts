import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MyApp } from './app.component';
import { CaughtPage } from '../pages/caught/caught';
import { MapPage } from '../pages/map/map';
import { PokedexPage } from '../pages/pokedex/pokedex';
import { TabsPage } from '../pages/tabs/tabs';
import { PokemonPage } from '../pages/pokemon/pokemon'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PokemonNamesAndImages } from '../services/pokemonNamesAndImages';
import { PokiApiServices } from '../services/pokeApi';
import { CaughtPokemon } from '../services/caughtPokemon';

import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
    CaughtPage,
    MapPage,
    PokedexPage,
    TabsPage,
    PokemonPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CaughtPage,
    MapPage,
    PokedexPage,
    TabsPage,
    PokemonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PokemonNamesAndImages,
    PokiApiServices,
    CaughtPokemon
  ]
})
export class AppModule {}
