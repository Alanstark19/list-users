import React, {useState} from 'react'

const Usuario = () => {

const [nombre,setNombre] = useState ('')
const [edad,setEdad] = useState ('')
const [lista,setLista] = useState ([])
const [fallo, setFallo] = useState(false)
const [error, setError] = useState('')
const [modoedicion, setModoEdicion] = useState(false)

const AgregarUsuario =(e)=>{
  e.preventDefault()
  if(!nombre.trim()){
    setFallo(true)
    setError('Lo siento introduce un nombre')
    return
  }if(!edad.trim()){
    setFallo(true)
    setError('Lo siento introduce una edad')
    return
  }
 
  const usuario = {
    nombre, 
    edad
  }
  setLista([...lista, usuario])
  setNombre('')
  setEdad('')
  setFallo(false)
}

const BorrarUsuario = (nombre)=>{
  const filtro = lista.filter( item => item.nombre !== nombre)
  setLista(filtro)
}

const PrimeraEdicion =(objetoAEditar)=>{
  setNombre(objetoAEditar.nombre)
  setEdad(objetoAEditar.edad)
  setModoEdicion(true)
}

const EdicionFinal = (e)=>{
      e.preventDefault()
      const editado = lista.map(item => item.nombre === nombre ? {nombre, edad} : item)
      setLista(editado)
      setModoEdicion(false)
      setNombre('')
      setEdad('')
}
  return (
    <div className='row'>

      <div className='col 5'>
        <h2>Listado de usuarios</h2>
        <hr/>
        <ul className='list-group'>
          {
            lista.map( i => (
              <li key={i.nombre} className='list-group-item'> Se llama {i.nombre} con {i.edad} años &nbsp;
                <button onClick={()=>{BorrarUsuario(i.nombre)}}
                className='btn btn-sm btn-primary col-sm-2 '>Borrar</button>&nbsp;
                <button onClick={() => {PrimeraEdicion(i)}}
                className='btn btn-sm btn-primary col-sm-2 '>Editar</button>
             </li>
            ))
          }
        </ul>
      </div>
      <div className='col 7'>
        <h2>Formulario de usuarios</h2>
      <hr/>
      {
        fallo ? (
          <span>{error}</span>
        ) : (<span></span>)
      }
      <form className='form-group'>
          <input onChange={ (e)=> {setNombre(e.target.value)}}
            className='form-control mb-2' type='text' placeholder='Introduce nombre'
            value={nombre}></input>
          <input onChange={ (e)=> {setEdad(e.target.value)}}
           className='form-control mb-2' type='text' placeholder='Introduce edad'
           value={edad}></input>
          {
            modoedicion ?(
              <button 
          onClick={(e)=>{EdicionFinal(e)}} 
          className='btn btn-info form-control ' type='submit'>
            Editar</button>
            ):
            (<button 
              onClick={(e)=>{AgregarUsuario(e)}} 
              className='btn btn-info form-control ' type='submit'>
                Agregar</button>)
          }
      </form>
      </div>
    </div>
  )
}

export default Usuario
