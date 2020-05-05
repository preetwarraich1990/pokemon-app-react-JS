/* import React from 'react';

export const App = () => {
    return (
        <div>Hello World from my fucntional App component</div>
    );
}


export default App; */
import React, { Component } from 'react';
import PokemonList from './PokemonList';

class App extends Component {

    constructor() {
        super();

        this.state = {
            type: '1',
            pokemonList: []
        }
    }

    onSelectTypeChange(event) {
        this.setState({
            type: event.target.value
        })
    }

    onBtnClick(event) {
        event.preventDefault();
        const API_URL = `https://pokeapi.co/api/v2/type/${this.state.type}`;
        fetch(API_URL)
        .then(result=>{
            return result.json()
        }).then(data=>{
            this.setState({
                pokemonList: data.pokemon
            }) 
        })
    }
    render() {
        return (
            <div
                className="container app-container"
            >
                <div>
                    <h4>Our small pokemon App</h4>
                    <form>
                        <label>Choose your pokemon type: </label>
                        <select
                            onChange={this.onSelectTypeChange.bind(this)}
                        >
                            <option value="5">Ground</option>
                            <option value="4">Poison</option>
                            <option value="1">Normal</option>
                            <option value="3">Flying</option>
                            <option value="2">Fighting</option>
                        </select>
                        <button
                            onClick={this.onBtnClick.bind(this)}
                            className="btn btn-success">Search</button>
                    </form>
                </div> 
                <PokemonList pokemonResult={this.state.pokemonList} />
            </div>
            
        );
    }
}

export default App; 