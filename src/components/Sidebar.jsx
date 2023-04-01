import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <aside className="bg-indigo-600 p-6 md:w-1/4 lg:w-1/4 md:h-screen md:sticky md:top-0 flex flex-col items-center">
        <Link to="/" className="mt-8 2xl:mt-32">
          <img src="/logo.gif" alt="logo" />
        </Link>
        <h1 className="lg:text-xl text-white font-bold text-center mt-2 md:mt-28 md:break-all lg:break-normal">Elkin Carreño <span className="text-sky-300 font-extrabold">(Programador Fullstack)</span></h1>
        <div className="hidden md:flex md:flex-col md:gap-3 md:justify-center md:mt-6 break-all">
            <a href="https://www.linkedin.com/in/elkin-carre%C3%B1o/" target='_blank' className="flex items-center gap-3">
              <FaLinkedin className="w-6 h-6" />
              <h2 className="text-xl text-white hover:text-gray-300">LinkedIn</h2>
            </a>
            <a href="https://github.com/elkincarreno10" target='_blank' className="flex items-center gap-3">
              <FaGithub className="w-6 h-6" />
              <h2 className="text-xl text-white hover:text-gray-300">GitHub</h2>
            </a>
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-6 h-6" />
              <h2 className="text-xl text-white">elquin50000@gmail.com</h2>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="w-6 h-6" />
              <h2 className="text-xl text-white">546551 Ocaña, Colombia</h2>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar
