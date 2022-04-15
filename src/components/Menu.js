import React, {useState} from 'react'
const Categorias = [
    {
        "nombre" : "Audio y Video",
        "articulos" : ["monitor led 27", "bocian", "smart tv 65 4k"]
    },
    {
        "nombre" : "Ferretería",
        "articulos" : ["Martillo pequeño", "Taldro", "Rotomartillo"]
    }
]

console.log("categorias",Categorias)
function Menu () {
    const [idArticulos, setIdArticulos] = useState(-1);

//metodos para cambiar el evento
    const handlerCargarArticulos = function(e){
        const opcion = e.target.value;
        console.log(opcion);

        setIdArticulos(opcion);//cambia el valor de articulos al seleccionado
    }


//onclick es el manejador de
    return (
    <div className='row'>
        <div className='col-6'>
            <h3>Categorías</h3>
            
            <select name="categorias" id="selCategorias" onClick={handlerCargarArticulos}>
                <option value={-1}>Selecciona una opción</option>
                {
                    Categorias.map((item, i) =>(
                        <option key={"categoria"+i} value= {i}> {item.nombre} </option>
                    ))
                }
            </select>
        </div>
        <div className='col-6'>
            <h3>Artículos</h3>
            <select name="articulos" id="selarticulo">
            {
                idArticulos > -1 && (
                    Categorias[idArticulos].articulos.map((item,i) =>(
                        <option key={"artuiculo"+i} value="">{item}</option>
                    ))
                )
                //idArticulos //imprime el valor del estado actual seleccionado
            }
            </select>    
        </div> 
      
    </div>
  );
}
export default Menu;