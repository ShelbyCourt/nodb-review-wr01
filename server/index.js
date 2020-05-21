const express = require('express')
const app = express()
const wildCtrl = require('./controllers/wildPokemonController')
const caughtCtrl = require('./controllers/caughtPokemonController')
const SERVER_PORT = 4232

app.use(express.json())

//Wild pokemon endpoints
app.get('/api/wild-pokemon', wildCtrl.getThreeRandomPokemon)

//Caught pokemon endpoints
app.get('/api/pokemon', caughtCtrl.getCaughtPokemon)
app.post('/api/pokemon', caughtCtrl.catchPokemon)
app.put('/api/pokemon/:pokemon_id', caughtCtrl.editPokemonName)
app.delete('/api/pokemon/:pokemon_id', caughtCtrl.deletePokemon)

app.listen(SERVER_PORT, () =>
  console.log(`Catching em all on port ${SERVER_PORT}`)
)
