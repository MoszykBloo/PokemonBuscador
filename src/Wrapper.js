import React from 'react';
import Searcher from './Searcher';
import Header from './Header';
import Pokemon from './Pokemon';

export default function Wrapper(){
    return (
        <div className="wrapper">
            <Header />
            <Searcher />
            <Pokemon />
        </div>
    )
}