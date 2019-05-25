import React, {Component} from  'react';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() {
        const {name, id, type, base_experince} = this.props;
        const imgSource = `${POKE_API}${id}.png`;
        return <div>
            <h1>{name}</h1>
            <img src={imgSource} alt={name}/>
            <div>
                Type: {type}
            </div>
            <div>
                EXP: {base_experince}
            </div>
        </div>
    }
}

export default Pokecard;
