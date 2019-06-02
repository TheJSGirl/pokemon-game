import React, {Component} from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        }else{
            title = <h1 className="Pokedex-loser">Lossing Hand</h1>
        }
        return (<div className="Pokedex">
           <h1>Pokedex!</h1>
           <h4 className="Pokedex-exp">Total experince: {this.props.exp}</h4>
           <p>{title}</p>
           <div className="Pokedex-cards">
           {this.props.pokemon.map((p) => (
                <PokeCard id={p.id} name={p.name} type={p.type} base_experince={p.base_experince}/>
            ))}
           </div>
        </div>)
    }

}

export default Pokedex;