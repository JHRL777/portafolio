import React from 'react'
import perfilFoto from '../../assets/img/perfilFoto.jpg'
function FooterComponente() {
  return (
    

<footer class=" rounded-lg shadow  m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="#" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={perfilFoto} class="h-8 rounded-full" alt="perfil" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jhonatan Reyes</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://github.com/JHRL777?tab=repositories" class="hover:underline me-4 md:me-6">Git</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jhonatan-reyes-316a80271" class="hover:underline me-4 md:me-6">Linkedin</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 JHRLE. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default FooterComponente