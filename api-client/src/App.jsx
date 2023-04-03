import { useState,useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'

import Login from './components/Login'
import Viewmesero from './components/Viewmesero'
import Viewcocina from './components/Viewcocina'
import Nofound from './components/Nofound'
import RequireAuth from './components/RequireAuth'
import './styles/App.scss'

// se podria usar el observador de firebase, para mantener logeado al usuario aunque se refresque la pagina

function App() {
  useEffect(()=>{
    // se podria usar el observador de firebase, para mantener logeado al usuario aunque se refresque la pagina
    // consultar en API, localStorage o fireBase, para setear mi user
  },[])
 
//   const {user, setUser} = useState(null);

//   if (!user){
//     return ( 
//       <Routes>
//         <Route path='/' element={<Login setUser = {setUser}/>} /> 
//         <Route path='*' element={<Nofound/>}/>
//       </Routes>
   
//     )
//   }
//  // hacer ruteo para cada usuario, cocinero, mesero y admnis
//  if(user.rol === 'cocinero'){
//   return(
//     <Routes>
//         <Route path='cocina' element={<Viewcocina/>} /> 
//         <Route path='*' element={<Nofound/>}/>
//       </Routes>
//   )
//  }


  return (
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='mesero' element={<Viewmesero/>}></Route>
      <Route path='cocina' element={<Viewcocina/>}></Route>
      <Route path='*' element={<Nofound/>}></Route>
    </Routes>


  )
}

export default App
