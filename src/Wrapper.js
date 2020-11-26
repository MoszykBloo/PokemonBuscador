import React from 'react';
import Searcher from './Searcher';
import Header from './Header';

export default function Wrapper(){
    return (
        <div className="wrapper">
            <Header />
            <Searcher defaultPokemon="pikachu"/>
        </div>
    )
}