import React, { useContext, useState, useEffect } from 'react'
import proyectoContext from "../../context/proyectos/proyectoContext"
import tareaContext from "../../context/tareas/tareaContext"

const FormTarea = () => {

    // extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext)
    const { proyecto } = proyectosContext

    // funciones del context de tareas
    const tareasContext = useContext(tareaContext)
    const { agregarTarea, validarTarea, obternerTareas, errortarea, tareaseleccionada, actualizarTarea, limpiarTarea } = tareasContext

    // effect detecta tarea seleccionada
    useEffect(() => {
        if (tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
        } else {
            guardarTarea({ nombre: "" })
        }
    }, [tareaseleccionada])


    // state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ""
    })

    // extraer el nombre del proyecto
    const { nombre } = tarea

    // si no hay proyecto seleccionado
    if (!proyecto) return null

    const [proyectoActual] = proyecto

    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()

        // validar
        if (nombre.trim() === "") {
            validarTarea()
            return
        }

        // verificar si es edicion o nueva tarea
        if (tareaseleccionada === null) {
            // agregar nueva tarea
            tarea.proyectoId = proyectoActual.id
            tarea.estado = false
            agregarTarea(tarea)
        } else {
            // actualizar tarea existente
            actualizarTarea(tarea)

            // elimina tarea del state
            limpiarTarea()

        }

        // pasar validacion - verificar el reducer

        // añadir al listado
        obternerTareas(proyectoActual.id)

        // reiniciar el form
        guardarTarea({
            nombre: ""
        })
    }

    return (
        <div className="formulario">

            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value={tareaseleccionada ? "Actualizar" : "Agregar"}
                    />
                </div>
            </form>
            {errortarea ? <p className="mensaje error">Debes nombrar todas las tareas</p> : null}
        </div>
    )
}

export default FormTarea