import React, {Component} from 'react';
import Pokedex from './Pokedex';

class PokeGame extends Component {

    static defaultProps = {
        pokemon: [
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
  
    ]
    };
    render() {
        const hand1 = [];
        const hand2 = [...this.props.pokemon];

        while(hand1.length < hand2.length) {
            let randomIndex = Math.floor(Math.random() * hand2.length);
            const randomPokemon = hand2.splice(randomIndex, 1)[0];
            hand1.push(randomPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experince, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experince, 0);

        return(
            <div>
                <div>
                    <Pokedex pokemon={hand1} isWinner = {exp1 > exp2} exp = {exp1}/>
                    <Pokedex pokemon={hand2} isWinner = {exp2 > exp1} exp = {exp2}/>
                </div>
            </div>
        )
    }
 }

 export default PokeGame;