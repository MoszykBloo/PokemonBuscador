import React,{ useState } from 'react';
import axios from "axios";
import './Searcher.css';
import Pokemon from "./Pokemon";

export default function Searcher(props){
    const [pokeData, setPokeData] = useState({ ready:false});
    const [pokemon, setPokemon] = useState(props.defaultPokemon);

    function showPokeInfo(response) {
    console.log(response.data.name);
    setPokeData({
        ready: true,
        pokemon: response.data.name,
        abilities: getAbilities(response.data.abilities),
        experience: response.data.base_experience,
        id: response.data.id,
        type: response.data.types[0].type.name,
        weight: response.data.weight,
        img: response.data.sprites.front_default
    });
  }

function getAbilities(abilities){
    var strAbilities = "";
    for (var i=0;i<abilities.length;i++){
        strAbilities += abilities[i].ability.name + " | ";
    }
    return strAbilities;
}

    function search(){
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    axios.get(apiUrl).then(showPokeInfo);

    console.log(apiUrl);
    }

    function handleSubmit(event){
    event.preventDefault();
    console.log(pokemon);
    search();
    }

    function handlePokemonSearch(event){
        setPokemon(event.target.value);
    }

    if (pokeData.ready){
        return(
        <div>
        <form id="search-form" onSubmit={handleSubmit}>
            <div className="input-group mb-3" >
                <input 
                type="seearch" 
                className="form-control" 
                placeholder="Nombre del Pokemon" 
                aria-label="Nombre del Pokemon" 
                aria-describedby="button-addon2"
                onChange={handlePokemonSearch}/>
                <div className="input-group-append">
                    <button 
                    className="btn btn-outline-warning" 
                    type="submit"
                    value="Buscar"
                    id="button-addon2">Buscar</button>
                </div>
            </div>
        </form>
        <Pokemon data={pokeData}/>
        </div>
    )
    } else {
    search();
    return (
      "cargando..."
    );
  }

    
}