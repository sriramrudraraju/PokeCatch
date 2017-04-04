export class PokemonInfoService {
    pokemonData = [
        //001 bulbasaur data
        {"name": "bulbasaur",
        "id": 1,
        "imagePath": "assets/pokemon/001Bulbasaur.png",
        "info": {
            "stats": [
                {
                    "stat": {
                        "url": "https://pokeapi.co/api/v2/stat/6/",
                        "name": "speed"
                    },
                    "effort": 0,
                    "base_stat": 45
                },
                {
                    "stat": {
                        "url": "https://pokeapi.co/api/v2/stat/5/",
                        "name": "special-defense"
                    },
                    "effort": 0,
                    "base_stat": 65
                },
                {
                    "stat": {
                        "url": "https://pokeapi.co/api/v2/stat/4/",
                        "name": "special-attack"
                    },
                    "effort": 1,
                    "base_stat": 65
                },
                {
                    "stat": {
                        "url": "https://pokeapi.co/api/v2/stat/3/",
                        "name": "defense"
                    },
                    "effort": 0,
                    "base_stat": 49
                },
                {
                    "stat": {
                        "url": "https://pokeapi.co/api/v2/stat/2/",
                        "name": "attack"
                    },
                    "effort": 0,
                    "base_stat": 49
                },
                {
                    "stat": {
                        "url": "https://pokeapi.co/api/v2/stat/1/",
                        "name": "hp"
                    },
                    "effort": 0,
                    "base_stat": 45
                }
            ],
            "weight": 69,
            "height": 7,
            "types": [
                {
                    "slot": 2,
                    "type": {
                        "url": "https://pokeapi.co/api/v2/type/4/",
                        "name": "poison"
                    }
                },
                {
                    "slot": 1,
                    "type": {
                        "url": "https://pokeapi.co/api/v2/type/12/",
                        "name": "grass"
                    }
                }
            ]
                }
            },
            //002 ivysaur data
            {
            "name": "ivysaur",
            "id": 2,
            "imagePath": "assets/pokemon/002Ivysaur.png",
            "info" : {
	
"stats": [
		{
			"stat": {
				"url": "https://pokeapi.co/api/v2/stat/6/",
				"name": "speed"
			},
			"effort": 0,
			"base_stat": 60
		},
		{
			"stat": {
				"url": "https://pokeapi.co/api/v2/stat/5/",
				"name": "special-defense"
			},
			"effort": 1,
			"base_stat": 80
		},
		{
			"stat": {
				"url": "https://pokeapi.co/api/v2/stat/4/",
				"name": "special-attack"
			},
			"effort": 1,
			"base_stat": 80
		},
		{
			"stat": {
				"url": "https://pokeapi.co/api/v2/stat/3/",
				"name": "defense"
			},
			"effort": 0,
			"base_stat": 63
		},
		{
			"stat": {
				"url": "https://pokeapi.co/api/v2/stat/2/",
				"name": "attack"
			},
			"effort": 0,
			"base_stat": 62
		},
		{
			"stat": {
				"url": "https://pokeapi.co/api/v2/stat/1/",
				"name": "hp"
			},
			"effort": 0,
			"base_stat": 60
		}
	],
	"weight": 130,
	"height": 10,
	"types": [
		{
			"slot": 2,
			"type": {
				"url": "https://pokeapi.co/api/v2/type/4/",
				"name": "poison"
			}
		},
		{
			"slot": 1,
			"type": {
				"url": "https://pokeapi.co/api/v2/type/12/",
				"name": "grass"
			}
		}
	]
}  
            },




        ];

   getAllPokemonData() {
       return this.pokemonData.slice();
   }     

}