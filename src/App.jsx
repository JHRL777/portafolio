import { useState } from 'react'

import './App.css'
import Nav from './Components/nav/Nav'
import InicioContenedor from './Components/Inicio/InicioContenedor'
import Proyectos from './Components/proyectos/Proyectos'
import Contacto from './Components/contacto/Contacto'

function App() {


  return (
    <>
     <Nav/>
     <InicioContenedor/>
     <Proyectos />
     <Contacto/>
    </>
  )
}

export default App
