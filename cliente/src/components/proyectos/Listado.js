import React, { Fragment, useContext, useEffect } from 'react'
import Proyecto from "../proyectos/Proyecto"

import proyectoContext from "../../context/proyectos/proyectoContext"

const ListadoProyectos = () => {

    // extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext

    // cargar proyectos si tiene contenido
    useEffect(() => {
        obtenerProyectos()
        // eslint-disable-next-line
    }, [])

    // verificar si proyectos tiene contenido
    if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>

    return (
        <Fragment>
            <ul className="listado-proyectos">
                {proyectos.map((proyecto) => (
                    <Proyecto
                        key={proyecto.id}
                        proyecto={proyecto}
                    />
                ))}
            </ul>
        </Fragment>
    )
}

export default ListadoProyectos