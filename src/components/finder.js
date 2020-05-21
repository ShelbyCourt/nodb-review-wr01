import React, { Component } from 'react'
import Grass from './Grass'

class Finder extends Component {
  constructor() {
    super()
    this.state = {
      wildPokemon: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/api/wild-pokemon').then((res) => {
      this.setState({
        wildPokemon: res.data,
      })
    })
  }

  render() {
    const pokemonMap = this.state.wildPokemon.map((pokemon) => (
      <Grass
        key={pokemon.id}
        catchPokemon={this.props.catchPokemon}
        data={pokemon}
        refreshFn={this.componentDidMount}
      />
    ))


    return (
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        {pokemonMap}  
        </div>
    )
  }
}

export default Finder
