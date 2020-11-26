import firebase from 'firebase/app';

const app = firebase.initializeApp({
    apiKey: "AIzaSyA5g9FHhX9CbcNXPfdMAxnYxFmMQ5jnM3g",
    authDomain: "loginpokemon-3b139.firebaseapp.com",
    databaseURL: "https://loginpokemon-3b139.firebaseio.com",
    projectId: "loginpokemon-3b139",
    storageBucket: "loginpokemon-3b139.appspot.com",
    messagingSenderId: "927035106403",
    appId: "1:927035106403:web:c9e1f0581707bc299ac456"
});

export default app;