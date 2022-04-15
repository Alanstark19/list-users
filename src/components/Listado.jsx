import React, {useState} from 'react'

const Listado = () => {
    const [texto, setTexto] = useState('')

  return (
    <div>
        <p>{texto}</p>
     <input onChange={(e) => {setTexto(e.target.value)}} type="text" placeholder='introduce algo' value={texto}></input>
        
    </div>
  )
}

export default Listado
