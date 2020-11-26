import React from 'react';
import './Pokemon.css';
import pikachu from './pikachu.png';

export default function Pokemon(){
    return(
        <div className="pokemon">
            <div className="card bg-transparent" id="card-title">
                <div className="card-body" id="card-pokename">
                    Pikachu
                </div>
            </div>
            <div className="card mb-3 bg-transparent" id="card-pokebody-top">
                <div className="row no-gutters">
                    <div className="col-md-4" id="card-pokebody-img">
                        <img src={pikachu} className="card-img" id="pokeimage" alt="pokemon"/>
                    </div>
                    <div className="card bg-transparent col-md-8" id="card-pokebody-bottom">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent">Habilidades: Electricidad | Estatica</li>
                            <li className="list-group-item bg-transparent">Experiencia: 112</li>
                            <li className="list-group-item bg-transparent">ID: 25</li>
                            <li className="list-group-item bg-transparent">Tipo: Electrico</li>
                            <li className="list-group-item bg-transparent">Peso: 60</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}