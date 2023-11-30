import { habilidades } from "./Habilidades"
import { perfil } from "./Habilidades"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa"
import perfilFoto from '../../assets/img/perfilFoto.jpg'


function Inicio() {
  return (
    <>
      <div className="lg:col-span-2 flex flex-col gap-2 my-2 justify-center items-center ">
        <img className="w-[300px]" src={perfilFoto} alt="perfil" />
        <div className="flex">
          <a  target="_blank" href="https://github.com/JHRL777?tab=repositories"><FaGithub className="text-white bg-transparent m-4 text-xl  " /></a>
          <a  target="_blank" href="https://www.linkedin.com/in/jhonatan-reyes-316a80271"><FaLinkedin className="text-white bg-transparent m-4 text-xl  "  /></a>
        </div>
        <h1 className="text-white text-xl font-semibold">Ingeniero de Sistemas</h1>
        <h3 className="text-white">Hola, Mi nombre es</h3>
        <h2 className="text-[#5BD1D7] font-bold">{perfil.nombre}</h2>
        <p className="text-white">{perfil.descripcion}</p>
      </div>
      <div className="flex flex-col gap-2 bg-[#D9D9D9] bg-opacity-10 md:justify-center md:items-center p-2">
        <h2 className="bg-transparent text-[#5BD1D7] text-2xl font-semibold text-center ">HABILIDADES</h2>
        {
          habilidades.map(habilidad => (
            <div className="flex border items-center gap-2 md:w-[300px] bg-[#5BD1D7] bg-opacity-10 " key={habilidad.id}>
              <div className="w-[70px] h-[70px] overflow-hidden">
                <img className="object-cover w-full h-full" src={habilidad.img} alt={habilidad.nombre} />
              </div>
              <p className="text-[#5BD1D7] font-semibold text-3xl bg-transparent">{habilidad.nombre}</p>
            </div>
          )
          )
        }
      </div>
    </>
  )
}

export default Inicio
