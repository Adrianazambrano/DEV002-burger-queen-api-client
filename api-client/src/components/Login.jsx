import React from 'react'
// import styles from '../styles/_login.scss'
import logo from '../assets/logo.png'
import fondo from '../assets/fondo-login.jpg'
const Login = ()=> {
  return (
  <div className='login_container'>
    <div className='logo_container'>
      <img src= {logo} className='logo' />
      <img src= {fondo} className='fondo' />
    </div>
      <form className='formulario'>
        <h2 > Login </h2>
        <input type="text"  placeholder='e-mail'/>
        <input type="text" placeholder='contraseña'/>
        <button>Ingresar</button>
        <p> Olvidé  mi contraseña </p>
    </form>
  </div>
  
  )
}

export default Login
