import React, {Component} from  'react';
import './PokeCard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number); 

class Pokecard extends Component {
    render() {
        const {name, id, type, base_experince} = this.props;
        const imgSource = `${POKE_API}${padToThree(id)}.png`;
        return <div className="PokeCard">
            <h1 className="PokeCard-title">{name}</h1>
            <img src={imgSource} alt={name}/>
            <div className="PokeCard-data">
                Type: {type}
            </div>
            <div className="PokeCard-data">
                EXP: {base_experince}
            </div>
        </div>
    }
}

export default Pokecard;
