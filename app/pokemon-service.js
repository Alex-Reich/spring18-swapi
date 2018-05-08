function PokemonService() {
var baseUrl = "https://pokeapi.co/api/v2/"



    this.getPokeList = function getPokeList(pokeList, cb){
        $.get(baseUrl + pokeList)
            .then(data =>{
              var res = data.results
              cb(res)
            })
      }
    
      this.getPokeInfo = function getPokeInfo(url, cb){
          $.get(url)
            .then(data =>{
              var res = data
              cb(res)
            })
      }




}