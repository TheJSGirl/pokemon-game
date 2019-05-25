import React, {Component} from 'react';
import PokeCard from './PokeCard';

class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112},
       { id:4, name:"Charmander", type:"fire",     base_experince:62},
       { id:11,name:"Metapod",    type:"bug",     base_experince:72},
       { id:25,name:"Pikachu",    type:"electric", base_experince:112}
    ]
    };
    render() {
        return (<div>
            {this.props.pokemon.map((p) => (
                <PokeCard id={p.id} name={p.name} type={p.type} base_experince={p.base_experince}/>
            ))}
        </div>)
    }

}

export default Pokedex;