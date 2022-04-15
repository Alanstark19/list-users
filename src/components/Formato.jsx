import React from 'react'

const formato = () => {
  const nombre = 'Manuel'

  const renderobj = (obj)=>{
      return obj.nombre + ' ' + obj.apellido
  }

  const obj={
      nombre: 'Manue',
      apellido:'xd'
  }
    return (
    <div>
      <p>El nombre es: {renderobj(obj)}</p>
    </div>
  ) 
}

export default formato