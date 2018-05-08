function PokemonController() {
    // private
    var pokemonService = new PokemonService();

    function drawPokeList(arr) {
        var template = "<ul>"
        for (var i = 0; i < arr.length; i++) {
            var pokemon = arr[i];
            template += `
               <li onclick="app.controllers.pokemonController.getPokeInfo('${pokemon.url}')">${pokemon.name}</li>
               `
        }
        template += `</ul>`
        document.getElementById("pokeList").innerHTML = template
    };

    function drawPokeInfo(info) {
        var template = `
        <h1>${info.name}</h1>
        <h3>Weight: ${info.weight}</h3>
        <h3>Height: ${info.height}</h3>
        <h3>Base Experience: ${info.base_experience}</h3>
        <h3>Types:</h3>
        <ul>
        `
        for (let i = 0; i < info.types.length; i++) {
            const type = info.types[i].type;
            template += `
            <li>${type.name}
            `
        }
        document.getElementById("pokeInfo").innerHTML = template

    }
    this.getPokeInfo = function getPokeInfo(url) {
        pokemonService.getPokeInfo(url, drawPokeInfo)
    }


    pokemonService.getPokeList("pokemon", drawPokeList)

}

