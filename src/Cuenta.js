import React,{ useState } from 'react';
import './Cuenta.css';
import app from "./firebaseConfig";
require('firebase/auth')

export default function Cuenta() {

    const [nombre, setNombre] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [user, setUser] = useState(() => {
        const user = app.auth().currentUser;
        return user;
    });

    
    function crearCuenta(email,password,name){
        app.auth().createUserWithEmailAndPassword(email, password)
        .then(function(result){
            var user = app.auth().currentUser;
            user.updateProfile({
            displayName: name
            }).then(function() {
                console.log("nombre ok");
                app.auth().onAuthStateChanged(firebaseUser => {
                    setUser(firebaseUser);
                  });
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("codigo de error: " + errorCode + "\nmensaje: " + errorMessage);
            });

        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("codigo de error: " + errorCode + "\nmensaje: " + errorMessage);
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        crearCuenta(mail,pass,nombre);
    }

    function logout(){
        app.auth().signOut().then(function(result){
            console.log("Adios");
            app.auth().onAuthStateChanged(firebaseUser => {
                setUser(firebaseUser);
              });
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("codigo de error: " + errorCode + "\nmensaje: " + errorMessage);
        });
    }

    function handleNombre(event) {setNombre(event.target.value);}
    function handleMail(event) {setMail(event.target.value);}
    function handlePass(event) {setPass(event.target.value);}

    return(
        <div className="card" id="acount-card">
            {   
                !user &&
                <div className="card-body" id="card-body-acount">
                    <form id="acount-form" onSubmit={handleSubmit}>
                        <h2>CREA UNA CUENTA</h2>
                        <input 
                            type="text"
                            placeholder="Ingresa tu nombre de usuario"
                            id="input-usuario"
                            className="form-control acount"
                            onChange={handleNombre}
                        />
                        <input 
                            type="email"
                            placeholder="Ingresa tu nombre email"
                            id="input-mail"
                            className="form-control acount"
                            onChange={handleMail}
                        />
                        <input 
                            type="password"
                            placeholder="Ingresa una contraseña"
                            id="input-password"
                            className="form-control acount"
                            onChange={handlePass}
                        />
                        <button 
                        type="submit" 
                        className="btn btn-outline-primary">Crear</button>
                    </form>
                </div>
            }
            {
                user &&
                <div className="card-body" id="card-body-loggedin">
                    <h2 id="saludo">Hola {nombre}!</h2>
                        <button 
                        type="button" 
                        className="btn btn-outline-primary" onClick={logout}>Salir</button>
                </div>
            }
        </div>
    );
}