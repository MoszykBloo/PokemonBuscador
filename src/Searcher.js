import React from 'react';
import './Searcher.css';

export default function Searcher(){
    return(
        <form id="search-form" >
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Nombre del Pokemon" aria-label="Nombre del Pokemon" aria-describedby="button-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-warning" type="button" id="button-addon2">Buscar</button>
                </div>
            </div>
        </form>
    )
}