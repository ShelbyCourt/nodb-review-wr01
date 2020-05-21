import React, { Component } from 'react'

class Pokemon extends Component {
    constructor(props){
        super()
        this.state = {
            isEditing: false,
            userInput: '',
        }
    }

    toggleEdit (){
        this.setState({
            isEditing: !this.state.isEditing
        })
    }




    handleChange (e){
        this.setState({
            userInput: e.target.value
        })
    }




    handleSaveName (){}
        

    render () {
        return (
            <div>
            <img src={this.props.data.image} alt={this.props.data.name} />
            {!this.state.isEditing ? (
              <p onDoubleClick={() => this.toggleEdit()}>{this.props.data.name}</p>
            ) : (
              <div>
                <input onChange={(e) => this.handleChange(e)} />
                <button onClick={() => this.handleSaveName()}>Save</button>
                <button onClick={() => this.toggleEdit()}>Cancel</button>
              </div>
            )}
            <button onClick={() => this.props.releasePokemon(this.props.data.id)}>
              Release
            </button>
          </div>

        )}
}

export default Pokemon