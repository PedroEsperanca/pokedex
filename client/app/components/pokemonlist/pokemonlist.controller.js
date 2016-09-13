class PokemonlistController {

  constructor(pokeapiClientService) {
  'ngInject';
    this.name = 'pokemonlist';

    this.pokemons = [];

    this.gettingPokemons = false;

    this._pokeapiClientService = pokeapiClientService;
  }

  getMore () {
    if(!this.gettingPokemons){
      this.gettingPokemons = true;
      this._pokeapiClientService.getPokemons(this.pokemons.length, (err, pokemons) => {
          Array.prototype.push.apply(this.pokemons, pokemons);
        this.gettingPokemons = false;
      });
    }
  }

  $onInit() {
    this.getMore();
  }

}

export default PokemonlistController;
