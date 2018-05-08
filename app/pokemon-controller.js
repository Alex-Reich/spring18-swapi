function PokemonController() {
    // private
    var pokemonService = new PokemonService();

    function drawPokeList(arr) {
        var template = "<ul>"
        for (var i = 0; i < arr.length; i++) {
            var pokemon = arr[i];
            template += `
               <li onclick="app.controllers.pokemonControler.getPokeList('${pokemon.url}')">Name: ${pokemon.name}</li>
            `
        }
        document.getElementById("pokeList").innerHTML = template
    };

    function drawPokeInfo(info) {
var template = "<ul>"

for (let i = 0; i < info.length; i++) {
    const element = info[i];
    
}

    }
    this.getPokeInfo = function getPokeInfo(url) {
        pokemonService.getPokeInfo(url, drawPokeInfo)
    }
    
    
    pokemonService.getPokeList("pokemon", drawPokeList)

}

