const axios = require('axios')

module.exports = {
  getThreeRandomPokemon: (req, res) => {
    const wildPokemonArray = []
    const rand1 = Math.ceil(Math.random() * 151)
    const rand2 = Math.ceil(Math.random() * 151)
    const rand3 = Math.ceil(Math.random() * 151)

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

    axios.get(baseUrl + rand1).then((response1) => {
      wildPokemonArray.push(response1.data)

      axios.get(baseUrl + rand2).then((response2) => {
        wildPokemonArray.push(response2.data)

        axios.get(baseUrl + rand3).then((response3) => {
          wildPokemonArray.push(response3.data)

          res.status(200).send(wildPokemonArray)
        })
      })
    })
  },
}
