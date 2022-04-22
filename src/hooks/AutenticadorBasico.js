import React, { useState } from 'react'


export const AutenticadorBasico = () => {
  

    const [autenticar, setAutenticar] = useState({
        usuario : '',
        password : '',
        mensaje : ''
    })

    const guardarUsuario = (nombreDeUsuario) => {
        setAutenticar({...autenticar, usuario : nombreDeUsuario});
    }
    
    const guardarPassword = (password) => {
        setAutenticar({...autenticar, password : password});
    }

    const autenticandoUsuario = () =>{
        if (autenticar.usuario === 'fernando.jimenez' && autenticar.password == 'F123456'){
            setAutenticar({...autenticar, mensaje : 'Log in Correcto'});
        } else {
            setAutenticar({...autenticar, mensaje : 'Usuario/Password incorrectos'});
        }
    }

    return (

    <div>
        <h1>
            React playground
        </h1>
        {autenticar.mensaje}
        <input 
            placeholder='Nombre de Usuario'
            className="btn  btn-primary"
            type='text'
            onChange={event => guardarUsuario(event.target.value)} 
        />
        
        <input 
            placeholder='Password'
            className="btn  btn-secondary"
            type='text'
            onChange={event => guardarPassword(event.target.value) }
        />

        <button
            className="btn btn-primary"
            onClick={autenticandoUsuario}>
            Log in
        </button>

        
    </div>
  )
}
