import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
}

    from "../../types"

export default (state, action) => {
    switch (action.type) {

        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }

        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }

        case AGREGAR_PROYECTO:
            return {
                // add the state as it is
                ...state,

                // proyectos array se pasa completo y se añade el nuevo proyecto detro del state
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false
            }

        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }

        case PROYECTO_ACTUAL:
            return {
                ...state,

                // filtrar proyecto por id
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }

        case ELIMINAR_PROYECTO:
            return {
                ...state,

                // eliminar proyecto de acuerdo al id
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto: null
            }

        default:
            return state
    }
}