
import logo from '../assets/logo.png'
import fondo from '../assets/fondo-login.jpg'
import { useNavigate } from 'react-router-dom'

const Login = (props)=> {
  const {setUser}=props;
  const navigate = useNavigate();
  
  const navigateTo = (route) => {
      navigate (route)
  }

  function login (){
    setUser(true)
  }

  return (
  <div className='login_container'>
    <div className='logo_container'>
      <img src= {logo} className='logo' />
      <img src= {fondo} className='fondo' />
    </div>
      <form className='formulario'>
        <h2 > Login </h2>
        <input type="text"  placeholder='e-mail'/>
        <input type="text" placeholder='contraseña' />
        <button  onClick= {()=>{
          navigateTo('/mesero')
        }} >
          Ingresar
        </button>
        <p> Olvidé  mi contraseña </p>
    </form>
  </div>
  
  )
}

export default Login
