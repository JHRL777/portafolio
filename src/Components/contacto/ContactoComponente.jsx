
import React, { useState } from 'react';
function ContactoComponente() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        notas: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar los datos del formulario (puedes imprimirlos o enviarlos a una API, por ejemplo)
        console.log(formData);
      };
    
  return (
    <div className="flex justify-center items-center h-screen bg-bagraun">
    <form
      className="bg-[#5BD1D7] bg-opacity-10 p-8 rounded-lg shadow-md w-96"
      onSubmit={handleSubmit}
    >
      <h2 className="text-[#5BD1D7] text-2xl font-bold mb-4 bg-transparent ">Contactame</h2>
      <div className="mb-4 bg-transparent">
        <label className="block text-white mb-2 bg-transparent">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#5BD1D7] focus:outline-none focus:border-[#5BD1D7] text-white placeholder-[#5BD1D7]::placeholder"
          placeholder="Tu Nombre"
          required
        />
      </div>
      <div className="mb-4 bg-transparent">
        <label className="block text-white mb-2 bg-transparent">Correo Electrónico</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#5BD1D7] focus:outline-none focus:border-[#5BD1D7] text-white placeholder-[#5BD1D7]::placeholder"
          placeholder="Tu Correo Electrónico"
          required
        />
      </div>
      <div className="mb-6 bg-transparent">
        <label className="block text-white mb-2 bg-transparent">Notas</label>
        <textarea
          name="notas"
          value={formData.notas}
          onChange={handleChange}
          className="w-full h-20 bg-transparent border-b border-[#5BD1D7] focus:outline-none focus:border-[#5BD1D7] text-white placeholder-[#5BD1D7]::placeholder"
          placeholder="Escribe tus notas aquí"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[#5BD1D7] text-bagraun rounded-full py-2 px-6 hover:bg-opacity-70 focus:outline-none"
      >
        Enviar
      </button>
    </form>
  </div>
  )
}

export default ContactoComponente