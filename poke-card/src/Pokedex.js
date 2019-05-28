import React, {Component} from 'react';
import PokeCard from './PokeCard';
import './Pokedex.css';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112}
    ]
    };
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>
        }else{
            title = <h1 className="Pokedex-loser">Lossing Hand</h1>
        }
        return (<div className="Pokedex">
           <h1>Pokedex!</h1>
           <p>Total experince: {this.props.exp}</p>
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