import React, {useState} from 'react';
import './App.css';
import Formato from './components/Formato';
import Hello from './components/Hello';
import Listado from './components/Listado';
import Listado2 from './components/Listado2';
import Usuario from './components/Usuario';
import Menu from './components/Menu';


function App() {
  

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1> Ejemplo de select con hooks</h1>
      </div>
      <Menu/>
    </div>
  );
} 

export default App;
