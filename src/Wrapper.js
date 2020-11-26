import React from 'react';
import Header from './Header';
import Searcher from './Searcher';
import Cuenta from './Cuenta';


export default function Wrapper(){
    return (
        <div className="wrapper">
            <Header />
            <Searcher defaultPokemon="pikachu"/>
            <Cuenta />
        </div>
    )
}