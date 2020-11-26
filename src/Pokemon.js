import React from 'react';
import './Pokemon.css';

export default function Pokemon(props){
    return(
        <div className="pokemon">
            <div className="card bg-transparent" id="card-title">
                <div className="card-body" id="card-pokename">{props.data.pokemon}</div>
            </div>
            <div className="card mb-3 bg-transparent" id="card-pokebody-top">
                <div className="row no-gutters">
                    <div className="col-md-4" id="card-pokebody-img">
                        <img src={props.data.img} className="card-img" id="pokeimage" alt="pokemon"/>
                    </div>
                    <div className="card bg-transparent col-md-8" id="card-pokebody-bottom">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">Habilidades: {props.data.abilities}</li>
                            <li className="list-group-item bg-transparent">Experiencia: {props.data.experience}</li>
                            <li className="list-group-item bg-transparent">ID: {props.data.id}</li>
                            <li className="list-group-item bg-transparent">Tipo: {props.data.type}</li>
                            <li className="list-group-item bg-transparent">Peso: {props.data.weight}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}