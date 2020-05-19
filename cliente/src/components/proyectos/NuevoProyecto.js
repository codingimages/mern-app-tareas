import React, { Fragment, useState, useContext } from 'react'
import proyectoContext from "../../context/proyectos/proyectoContext"

const NuevoProyecto = () => {

    // obtener state del formulario
    const proyectosContext = useContext(proyectoContext)
    const { formulario, mostrarFormulario, agregarProyecto, errorformulario, mostrarError } = proyectosContext

    // state para nuevo proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre: "",
    })

    // extraer nombre de proyecto
    const { nombre } = proyecto

    // lee contenidos del imput
    const onChangeProyecto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }

    // mostrar formulario
    const onClickFormulario = () => {
        mostrarFormulario()
    }

    const onSubmitProyecto = (e) => {
        e.preventDefault()

        // validar proyecto
        if (nombre === "") {
            mostrarError()
            return
        }

        // agregar al state, proyecto viene de esta pagina en el state y se pasa al state global
        agregarProyecto(proyecto)


        // reiniciar la forma
        guardarProyecto({
            nombre: ""
        })
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >
                Nuevo Proyecto
        </button>
            {formulario
                ? (<form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        onChange={onChangeProyecto}
                        value={nombre}
                    />

                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Agregar Proyecto"
                    />

                </form>)
                : null
            }

            {errorformulario ? <p className="mensaje error">Debes ingresar un nombre para tu proyecto</p> : false}

        </Fragment>
    )
}

export default NuevoProyecto