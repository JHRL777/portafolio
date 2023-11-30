import { proyectos } from "./DataProyectos";
import { habilidades } from "../Inicio/Habilidades"
import { FaGithub } from "react-icons/fa6";
function ProyectosComponentes() {
  return (
    <>
      
      {proyectos.map((proyecto) => (
    <section key={proyecto.id} className="bg-[#0B3F55] relative bg-opacity-30 p-2 flex flex-col justify-between  gap-2">
       <a className="absolute   top-0 right-0 rounded-bl-xl" href={proyecto.git} target="_blank" rel="noopener noreferrer"><FaGithub className="text-white bg-transparent m-4 text-xl  " /></a> 
        <div className="bg-transparent flex flex-col gap-2">
        <h3 className="bg-transparent text-[#5BD1D7] font-semibold text-2xl">{proyecto.nombre}</h3>
        <p className="bg-transparent text-lg text-white">{proyecto.descripcion}</p>
        </div>
        {/* Mapeo de habilidades para el proyecto actual */}
        <div className="flex gap-4 flex-wrap bg-transparent mt-2 ">
            {proyecto.habilidades.map((habilidadNombre) => {
                const habilidad = habilidades.find((habilidad) => habilidad.nombre === habilidadNombre);

                if (habilidad) {
                    return (
                        
                        <div key={habilidad.id} className="flex justify-center items-center bg-[#5BD1D7] bg-opacity-10 pr-1 gap-[2px] rounded-sm ">
                            <div className="bg-transparent w-[20px] h-[20px] overflow-hidden ">
                            <img src={habilidad.img} alt={habilidad.nombre} className="object-cover w-full h-full bg-transparent" />
                            </div>
                            <p className="text-xs bg-transparent text-[#5BD1D7] ">{habilidad.nombre}</p>
                        </div>
                    );
                } else {
                    return null; // Manejar el caso en que no se encuentre la habilidad
                }
            })}
        </div>  
    </section>
))}
      
    </>
  );
}

export default ProyectosComponentes;
