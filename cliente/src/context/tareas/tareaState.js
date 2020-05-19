import React, { useReducer } from "react"
import TareaContext from "./tareaContext"
import TareaReducer from "./tareaReducer"

import { v4 as uuidv4 } from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from "../../types/index"

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: "Elegir Plataforma Nueva", estado: true, proyectoId: 1 },
            { id: 2, nombre: "Elegir Colores", estado: false, proyectoId: 2 },
            { id: 3, nombre: "Elegir Plataforma de Pago", estado: true, proyectoId: 1 },
            { id: 4, nombre: "Elegir Hosting", estado: true, proyectoId: 2 },
            { id: 5, nombre: "Elegir Diseno", estado: true, proyectoId: 3 },
            { id: 6, nombre: "Clase Estilo", estado: false, proyectoId: 1 },
            { id: 7, nombre: "Lenguaje", estado: true, proyectoId: 3 },
            { id: 8, nombre: "Nuevas ideas", estado: true, proyectoId: 2 },
            { id: 8, nombre: "Elegir Plataforma Again", estado: true, proyectoId: 1 },
            { id: 9, nombre: "Considerar Estilo", estado: false, proyectoId: 2 },
            { id: 10, nombre: "Lenguaje a usar", estado: true, proyectoId: 3 },
            { id: 11, nombre: "Hacer Publicidad", estado: true, proyectoId: 3 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // funciones

    // obtener tareas de acuerdo al id del proyecto
    const obternerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    // agregar tarea al proyecto selecccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4()
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
        })
    }

    const eliminarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    // cambia el estado de la tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // extraer tarea actual
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        })
    }


    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,

                obternerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState