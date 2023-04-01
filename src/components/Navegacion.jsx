
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navegacion = () => {

  const location = useLocation()

  const [ mostrarMenu, setMostrarMenu ] = useState(false)

  const handleMenu = () => {
    setMostrarMenu(!mostrarMenu)
  }

  return (
    <div className="flex flex-col md:h-auto md:sticky md:top-0 z-10">
        <nav className="flex flex-col md:flex-row items-center justify-around text-indigo-700 text-xl lg:text-2xl font-extrabold bg-gray-400 uppercase py-3 md:py-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="block md:hidden w-9 h-9 cursor-pointer" onClick={handleMenu}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <Link 
            to='/' 
            className={`${location.pathname === '/' ? 'text-white bg-indigo-500' : ''} ${mostrarMenu ? 'block' : 'hidden'} md:block cursor-pointer p-4 hover:text-white hover:bg-indigo-500`}
          >Sobre Mi</Link>
          <Link 
            to='/habilidades' 
            className={`${location.pathname === '/habilidades' ? 'text-white bg-indigo-500' : ''} ${mostrarMenu ? 'block' : 'hidden'} md:block  cursor-pointer p-4 hover:text-white hover:bg-indigo-500`}
          >Skills</Link>
          <Link 
            to='/proyectos' 
            className={`${location.pathname === '/proyectos' ? 'text-white bg-indigo-500' : ''} ${mostrarMenu ? 'block' : 'hidden'} md:block cursor-pointer p-4 hover:text-white hover:bg-indigo-500`}
          >Proyectos</Link>
        </nav>
    </div>
    
  )
}

export default Navegacion
