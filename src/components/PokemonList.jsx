import React, { Component } from 'react'
import Pokemon from './Pokemon'

class PokemonList extends Component {
    constructor() {
        super();

        this.state = {
            message: "hello I am in state PL"
        }
    }
    renderPokemons(){
        let counter = 0;
        return this.props.pokemonResult.map(pokemons =>{
            counter = counter +1; 
        return <Pokemon key={counter} name={pokemons.pokemon.name} url={pokemons.pokemon.url} count={counter}/>
        })
    }

    render() {
        if (this.props.pokemonResult.length > 0) {
            return (
            <ul>
                {this.renderPokemons()}
            </ul>
            )
        }

        return (<div>No results</div>)
    }
}
export default PokemonList;