import React, { useContext } from 'react'
import tareaContext from "../../context/tareas/tareaContext"
import proyectoContext from "../../context/proyectos/proyectoContext"

const Tarea = ({ tarea }) => {

    // funciones del context de tareas
    const tareasContext = useContext(tareaContext)
    const { eliminarTarea, obternerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext

    // extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    const [proyectoActual] = proyecto

    // funcion que se ejecuta cuando el ususario elimina tarea
    const tareaEliminar = id => {
        eliminarTarea(id)
        obternerTareas(proyectoActual.id)
    }

    // funcion para modificar el estado de las tareas
    const cambiarEstado = tarea => {
        if (tarea.estado) {
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        cambiarEstadoTarea(tarea)
    }

    // selecciona tarea para editarla
    const seleccionarTarea = tarea => {

        guardarTareaActual(tarea)
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado ?
                    <button
                        type="button"
                        className="completo"
                        onClick={() => cambiarEstado(tarea)}
                    >Completo
                    </button>
                    :
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => cambiarEstado(tarea)}
                    >Incompleto
                    </button>
                }
            </div>
            <div className="acciones">

                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar
                </button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => { tareaEliminar(tarea.id) }}
                >Eliminar
                    </button>

            </div>
        </li>
    )
}

export default Tarea