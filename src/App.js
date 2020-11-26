import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/auth';
import Wrapper from './Wrapper';
import Footer from './Footer';

function App() {
   return (
    <div className="App">
      <div className="container">
        <Wrapper />
        <Footer />
      </div>
        
    </div>
  );
}

export default App;
