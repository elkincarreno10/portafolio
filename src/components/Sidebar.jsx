
const Sidebar = () => {
  return (
    <aside className="bg-indigo-600 p-6 md:w-1/4 lg:w-1/4 md:h-screen md:sticky md:top-0 flex flex-col items-center">
        <img src="img/Foto.jpeg" alt="Foto Perfil" className="w-20 lg:w-40 rounded-full mx-auto" />
        <h1 className="text-base lg:text-xl text-white font-bold mt-2 lg:mt-8 text-center">Elkin Carreño <span className="text-sky-300 font-extrabold">(Programador Junior)</span></h1>
        <p className="text-white text-center md:text-sm lg:text-base mt-2 lg:mt-5 mb-0">
          Ingeniero Civil egresado de la Universidad Industrial de Santander con distinción Cum Laude y Programador FullStack de Javascript, soy una persona que adora los retos y no se rinde fácilmente. Muy detallista y autodidacta cada día, que afronta los nuevos retos con la mejor actitud y siempre dispuesto a aprender.
        </p>
    </aside>
  )
}

export default Sidebar
