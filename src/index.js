import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
      <div className="creditos">
        <small>
          <a
            href="https://github.com/MoszykBloo/PokemonBuscador"
            target="blank"
            id="credits"
          >
            Open source code
          </a>{" "}
          <span id="my-name">by Monica Camacho</span>
        </small>
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);

