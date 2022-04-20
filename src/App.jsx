import React, {useState} from 'react';
import './App.css';
import Formato from './components/Formato';
import Hello from './components/Hello';
import Listado from './components/Listado';
import Listado2 from './components/Listado2';
import Usuario from './components/Usuario';
import Menu from './components/Menu';
import MenuMaterias from './components/Menu2';
import MenuMaterias2 from './components/MenuMaterias2';



function App() {
  

  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1> Ejemplo de select con hooks</h1>
      </div>
      <MenuMaterias2/>
    </div>
  );
} 

export default App;
