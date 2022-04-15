import React from 'react'

const Listado2 = (props) => {
  console.log(props.datos)
    return (
    <div>
      <h2>Ejemplo de listado de datos, recorriendo datos</h2>
      <ul>
          {
              props.datos.map(item =>(
                  <li key={item.id}>{item.nombre}- {item.edad}</li>
              ))
          }
      </ul>
    </div>
  )
}

export default Listado2
