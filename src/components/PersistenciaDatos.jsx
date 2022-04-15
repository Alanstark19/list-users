import React, {useState} from 'react'

const PersistenciaDatos = () => {
  const [texto, setTexto] = useState('soy un texto')
  const [valor, setValor] = useState(0)
  const aumentar = ()=>{
    setValor(valor + 1)
    setTexto('soy otro texto')
  }
  const disminuir = ()=>{
    setValor(valor - 1)
  }
  return (
    <div className='container'>
      <h1>Ejemplo de contador con useState</h1>
      <p>El valor del dato es - {valor}</p>
      <p>{texto}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      
    </div>
  );
}

export default PersistenciaDatos
