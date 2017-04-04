export class PokemonCoord {
    private id: number

    constructor(public latitude,
                public longitude){
        this.id = this.getRandomInt(1,5);
    }

     getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}