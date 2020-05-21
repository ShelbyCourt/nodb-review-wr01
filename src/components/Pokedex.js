import React from 'react'
import Pokemon from './Pokemon'

// export default props => {}
// export default function(props){}

function Pokedex(props) {
  const pokemonMap = props.caughtPokemon.map((pokemon) => (
    <Pokemon
      key={pokemon.id}
      saveName={props.saveName}
      releasePokemon={props.releasePokemon}
      data={pokemon}
    />
  ))
  return (
    <div>
      <h2>Pokedex</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {pokemonMap}
      </div>
    </div>
  )
}

export default Pokedex
