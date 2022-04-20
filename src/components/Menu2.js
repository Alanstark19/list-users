import React, {useState} from 'react'
const Materia = [
    {
        "nombreMateria" : "Programacion",
        "horario" : ["Lunes 7-8", "Martes 7-8", "Miercoles 7-8"]
    },
    {
        "nombreMateria" : "Matematicas",
        "horario" : ["Lunes 8-9", "Martes 8-9", "Miercoles 8-10"]
    },
    {
        "nombreMateria" : "Computo en la nube",
        "horario" : ["Lunes 9-11", "Martes 9-11", "Miercoles 10-12"]
    },
]

function MenuMaterias () {
    const [idHorario, setIdHorario] = useState(-1);
    const [matSelect, setMatSelect] = useState(-1);
    const [horarioSelect, sethorarioSelect] = useState(-1);

//metodos para cambiar el evento
    const handlerCargarHorario = function(e){
        const opcion = e.target.value;
        console.log(opcion);
        //setMatSelect(opcion.nombreMateria);
        setIdHorario(opcion);//cambia el valor de Horario al seleccionado
    }

//
    const handlerHorario = function(e){
        const opcion = e.target.value;
        console.log(opcion);
        sethorarioSelect(opcion);//cambia el valor de Horario al seleccionado
       
    }


//onclick es el manejador de
    return (
    <div className='row'>
        <div className='col-6'>
            <h3>Materias</h3>
            
            <select name="Materia" id="selMateria" onClick={handlerCargarHorario}>
                <option value={-1}>Selecciona una materia</option>
                {
                    Materia.map((item, i) =>(
                        <option key={"materia"+i} value= {i}> {item.nombreMateria} </option>
                    ))
                }
            </select>
        </div>
        <div className='col-6'>
        
            <h3>Horario</h3>
            <select name="horario" id="selhorario" onClick={handlerHorario}> 
            {
                idHorario > -1 && (
                    Materia[idHorario].horario.map((item,i) =>(
                        <option key={"horario"+i} value={i}>{item}</option>
                    ))
                )
                //idHorario //imprime el valor del estado actual seleccionado
            }
            </select>    
        </div> 
      <div className='container-fluid'>
        <br/>
        <button type='button' className='btn btn-success'
        > Agregar Materia</button>
      </div>
       
    </div>
  );
}
export default MenuMaterias;