import React from 'react';
import pokemon1 from './pokemon1.webp';
import './Header.css';

export default function Header(){
    return(
        <div id="header-img">
            <img src={pokemon1} id="poke-logo" alt="pokemon logo"/>
        </div>
    )
}