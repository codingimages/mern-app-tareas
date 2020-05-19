import React, { useContext } from 'react'

import proyectoContext from "../../context/proyectos/proyectoContext"
import tareaContext from "../../context/tareas/tareaContext"

const Proyecto = ({ proyecto }) => {

    const proyectosContext = useContext(proyectoContext)
    const { proyectoActual } = proyectosContext

    // funciones del context de tareas
    const tareasContext = useContext(tareaContext)
    const { obternerTareas } = tareasContext

    // agregar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id) // fijar el proyecto actual
        obternerTareas(id) // elejir tareas al dar click
    }


    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={() => {
                    seleccionarProyecto(proyecto.id)
                }}
            >
                {proyecto.nombre}
            </button>
        </li>
    )
}
export default Proyecto