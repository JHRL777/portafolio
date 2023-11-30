import React from 'react'
import ProyectosComponentes from './ProyectosComponentes'
import { Link as ScrollLink } from 'react-scroll';

function Proyectos() {
  return (
    <div id="Proyectos" className='container m-auto'>
    <h1 className='text-center mb-7 text-[50px] text-[#5BD1D7] font-semibold '>Proyectos</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-2 lg:m-0 '>
    
      <ProyectosComponentes />
    </div>
    
    </div>
  )
}

export default Proyectos
