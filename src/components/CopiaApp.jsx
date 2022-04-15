import React, {useState} from 'react';
import Formato from './components/Formato';
import Hello from './components/Hello';
import Listado from './components/Listado';
import Listado2 from './components/Listado2';


function App() {
  const datos =[{
    nombre : 'Manuel',
    edad : 35,
    id : 1
  },
  {nombre : 'Alan',
    edad : 54,
    id : 2
  },
  {nombre : 'Maria',
    edad : 15,
    id : 3
  }]

  return (
    <div className='container'>
      <Listado2 datos={datos}/>
    </div>
  );
} 

export default CopiaApp;
