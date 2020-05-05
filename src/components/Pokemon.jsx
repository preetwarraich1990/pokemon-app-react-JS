import React, { Component } from 'react'

class Pokemon extends Component {
    constructor() {
        super();

        this.state = {
            showValues: false,
            imageUrl: '',
            height: 0,
            weight: 0
        }
    }
    onClickPokemonName() {
        const API_URL = this.props.url;
        fetch(API_URL)
            .then(result => {
                return result.json()
            }).then(data => {
                this.setState({
                    showValues: true,
                    height: data.height,
                    weight: data.weight,
                    imageUrl: data.sprites.front_default
                })
            }).catch(error => console.log(console.error()))
    }
    
    onCloseTile() {
        this.setState({
            showValues:false
        })
    }
    render() {
        if (!this.state.showValues) {
            return (
                <li 
                    onClick={this.onClickPokemonName.bind(this)}
                    className="card">
                    Name : {this.props.name}
                </li>)
        }
        else if (this.state.showValues) {
            return (
                <li 
                onClick={this.onCloseTile.bind(this)}
                className="card">
                    <div>
                        <div><p>Name: {this.props.name}</p></div>
                        <div>
                            <p>Height:{this.state.height}</p>
                            <p>Weight:{this.state.weight}</p>
                        </div>
                        <img src={this.state.imageUrl} />
                    </div>
                </li>)
        }
        return(<div>Loading...</div> )
    }
}

export default Pokemon;