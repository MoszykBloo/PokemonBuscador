import React from 'react';
import './Cuenta.css';


export default function Cuenta(){
    return(
        <div className="card" id="acount-card">
            <div className="card-body" id="card-body-acount">
                <form id="acount-form">
                    <h2>CREA UNA CUENTA</h2>
                    <input 
                        type="text"
                        placeholder="Ingresa tu nombre de usuario"
                        id="input-usuario"
                        className="form-control acount"
                    />
                    <input 
                        type="email"
                        placeholder="Ingresa tu nombre email"
                        id="input-mail"
                        className="form-control acount"
                    />
                    <input 
                        type="password"
                        placeholder="Ingresa una contraseña"
                        id="input-password"
                        className="form-control acount"
                    />
                    <button 
                    type="button" 
                    className="btn btn-outline-primary">Crear</button>
                </form>
            </div>
        </div>
    )
}