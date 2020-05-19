import React, { useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from "./proyectoContext"
import proyectoReducer from "./proyectoReducer"
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO

} from "../../types"

const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: "Tienda virtual" },
        { id: 2, nombre: "Intranet" },
        { id: 3, nombre: "Diseño" },
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
    }

    // dispatch para ejecutar acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    // agregar nuevo proyecto
    const agregarProyecto = proyecto => {

        // asignar id
        proyecto.id = uuidv4();

        // insertar proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })

    }

    // selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // eliminar proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })
    }

    // mensaje de error
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,

                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState