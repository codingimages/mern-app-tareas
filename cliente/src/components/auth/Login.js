import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Login = () => {

    // state para definir sesión
    const [usuario, guardarUsuario] = useState({
        email: "",
        password: ""
    })

    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        // validar que no haya campos vacios

        // password minimo de 6 caracteres

        // 2 passwords

        // pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form action="/proyectos">

                    <div className="campo-form">
                        {/* email */}
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        {/* password */}
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            onSubmit={onSubmit}
                        />
                    </div>
                </form>

                <Link className="enlace-cuenta" to="/">Crear Cuenta</Link>
            </div>
        </div>
    )
}

export default Login