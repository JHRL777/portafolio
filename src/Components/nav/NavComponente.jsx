
import { Link as ScrollLink } from 'react-scroll';
import { IoAppsSharp } from "react-icons/io5";
import { useState } from 'react';


function NavComponente() {

const [menu, setMenu] = useState(false)

const toogleMenu =()=>{
   setMenu(!menu)
}

const closeMenu = () => {
  setMenu(false);
};

console.log(menu)

  return (
    <>
    <div className=" text-[#5BD1D7] font-semibold bg-transparent">
      <h1 className='text-[50px] bg-transparent'>JERL</h1>
    </div>
    <ul className="gap-3 text-white hidden lg:flex">
      <li className="hover:text-[#5BD1D7] p-2 text-xl font-medium cursor-pointer">
        <ScrollLink  to="Inicio" smooth={true} duration={500} offset={-100} >
          Inicio
          </ScrollLink>
      </li>
      <li className="hover:text-[#5BD1D7] p-2 text-xl font-medium cursor-pointer">
        <ScrollLink to="Proyectos" smooth={true} duration={500} offset={-70} >Proyectos</ScrollLink>
      </li>
      <li className="hover:text-[#5BD1D7] p-2 text-xl font-medium cursor-pointer">
        <ScrollLink to="Contactos" smooth={true} duration={500} >Contactos</ScrollLink>
      </li>
    </ul>
    {/* menu movil */}
    <IoAppsSharp onClick={toogleMenu} className='text-white text-[40px] lg:hidden cursor-pointer' />
    <div className={` md:hidden right-0 mt-48 mx-10  ${menu ? 'absolute':'hidden'}`}>
    <ul className="flex flex-col text-white bg-[#5BD1D7] bg-opacity-10 gap-1 ">
      <li className="hover:text-[#5BD1D7] p-2 text-xl font-medium cursor-pointer  text-[#5BD1D7]">
        <ScrollLink to="Inicio" smooth={true} duration={500} offset={-100} onClick={closeMenu}>Inicio</ScrollLink>
      </li>
      <li className="hover:text-[#5BD1D7] p-2 text-xl font-medium cursor-pointer text-[#5BD1D7]">
        <ScrollLink to="Proyectos" smooth={true} duration={500} offset={-70} onClick={closeMenu}>Proyectos</ScrollLink>
      </li>
      <li className="hover:text-[#5BD1D7] p-2 text-xl font-medium cursor-pointer text-[#5BD1D7]">
        <ScrollLink to="Contactos" smooth={true} duration={500} onClick={closeMenu} offset={-70}>Contactos</ScrollLink>
      </li>
    </ul>
    </div>
  </>
  )
}

export default NavComponente
