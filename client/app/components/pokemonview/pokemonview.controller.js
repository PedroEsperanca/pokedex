class PokemonviewController {
  constructor(pokeapiClientService, $stateParams, $http) {
    'ngInject';
    this.name = 'pokemonview';

    console.log($stateParams.id);

    pokeapiClientService.getPokemon(
      '//pokeapi.co/api/v2/pokemon/'+(parseInt($stateParams.id)-1),
      (err, pokemon) => {
        this.previousPokemon = pokemon;
      }
    );

    pokeapiClientService.getPokemon(
      '//pokeapi.co/api/v2/pokemon/'+$stateParams.id,
      (err, pokemon) => {

        this.pokemon = pokemon;

        $http({
          method: 'GET',
          url: '//pokeapi.co/api/v2/characteristic/'+$stateParams.id
        }).then((response) => { //success function

          //add the reponse to the pokemon
          pokemon.characteristic = response.data;

        });

      }
    );

    pokeapiClientService.getPokemon(
      '//pokeapi.co/api/v2/pokemon/'+(parseInt($stateParams.id)+1),
      (err, pokemon) => {
        this.nextPokemon = pokemon;
      }
    );
  }
}

export default PokemonviewController;
