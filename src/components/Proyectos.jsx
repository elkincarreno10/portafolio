import { useState } from "react"

const Proyectos = ({modal, setProyecto}) => {


  const handleProyecto = e => {
    let divProyecto

    if(e.target.localName === 'div') {
      divProyecto = e.target
    } else {
      divProyecto = e.target.parentElement
    }

    const tituloProyecto = divProyecto.firstElementChild
    const imgProyecto = tituloProyecto.nextElementSibling
    const descripcionProyecto = imgProyecto.nextElementSibling

    setProyecto({
      titulo: tituloProyecto.textContent,
      imagen: imgProyecto.src,
      descripcion: descripcionProyecto.textContent,
      video: tituloProyecto.dataset.video,
      frontend: imgProyecto.dataset.frontend,
      backend: descripcionProyecto.dataset.backend,
      enlace: descripcionProyecto.dataset.enlace
    })
    modal()
  }


  return (
    <div className="mx-8 md:mx-20 text-center mt-8">
      <h1 className="uppercase text-2xl font-extrabold">Proyectos</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-left mb-10">
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676561174/UpTask_hwq9ui.mp4'>UpTask - MERN</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/UpTask.png" alt="Proyecto UpTask" data-frontend='https://github.com/elkincarreno10/UpTask_MERN_frontend' />
            <p className="line-clamp-4 md:line-clamp-6" data-backend='https://github.com/elkincarreno10/UpTask_MERN_backend'>Proyecto fullstack desarrollado con el stack MERN, este proyecto fue mi favorito del curso de react debido a la complejidad que llevaba, en este proyecto aprendí muchas cosas: TailwindCSS, React-Router-DOM, node.js, HeadlessUI que mediante componentes permite darle más interactividad a nuestra app, Socket.io que es una excelente herramienta para tener aplicaciones en tiempo real. En general este proyecto me permitió entender muchos conceptos y me gustó mucho debido a la complejidad que tuvo pero que al final valió la pena por la excelente app que se diseñó y todo el aprendizaje que me dejó.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1677030894/BienesRaicesNodeMVC_jwskgw.mp4'>Bienes Raices NodeJS - MVC</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/BienesRaicesNode.png" alt="Proyecto Bienes Raices NodeJS - MVC" data-frontend='https://github.com/elkincarreno10/bienesRaicesNode' />
            <p className="line-clamp-4 md:line-clamp-6">Primer Proyecto del curso de NodeJs, este proyecto fullstack fue un proyecto muy interesante debido a lo completo que fue, aprendí a trabajar con el ORM Sequelize, y continue mi aprendizaje con Express, como base de datos usamos MySQL, en este proyecto manejamos el patrón de arquitectura MVC y usamos como motor de plantillas (template engine) PugJS, aprendí a autenticar usuarios y a mostrar distinta información en base a esto, además aprendí a subir imágenes con Node y a realizar buenas prácticas con estas imágenes para no corromper la base de datos.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1677605092/Meeti_crrod0.mp4'>Meeti - MVC</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/Meeti.png" alt="Proyecto Meeti - MVC" data-frontend='https://github.com/elkincarreno10/meeti' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto del curso de NodeJs, en el cual utlizamos NodeJs, Express y Sequelize para manejar el backend, además aprendí a manejar archivos e imagenes con NodeJs y además en este proyecto incorporamos mapas con Leaflet lo cal me permitió entender el funcionamiento de esta herramienta. Como motor de plantillas (template engine) utlizamos Embedded JavaScript Templating (EJS), en este proyecto también aprendí a autenticar usuarios y a manejar diferentes tipos de consultas con Sequelize para incluir direntes modelos y datos dentro de una sola consulta.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567233/RockFestival_by6dpt.mp4'>Rock Festival</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/RockFestival.png" alt="Proyecto Rock Festival" data-frontend='https://github.com/elkincarreno10/FrontendFestivalMusica' />
            <p className="line-clamp-4 md:line-clamp-6" data-backend='https://github.com/elkincarreno10/BackendFestivalMusica'>Proyecto propio realizado con la intención de consolidar los conocimientos en desarrollo FullStack con JavaScript, adicionalmente utilicé el framework TailwindCSS para dar los estilos a todos los elementos, debido a que es un framework que me gustó mucho y es muy eficiente para dar estilos, en este proyecto pude comprender mejor como funciona el stack MERN y familiarizarme mucho más con este poderoso stack.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567137/AdministradorPacientes_rrrtgj.mp4'>Administrador De Pacientes de Veterinaria</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/AdministradorPacientes.png" alt="Proyecto Administrador Pacientes de Veterinaria" data-frontend='https://github.com/elkincarreno10/MERN_APV_frontend' />
            <p className="line-clamp-4 md:line-clamp-6" data-backend='https://github.com/elkincarreno10/MERN_APV_backend' data-enlace='https://mern-apv-frontend-liard.vercel.app/'>Proyecto FullStack con JavaScript desarrollado en el curso de JavaScript Moderno, este proyecto lo realizamos con el stack MERN. Este proyecto fue un reto para mi porque era la primera vez que creaba una aplicación utilizando React y todo estuvo lleno de aprendizaje y muchos momentos en los que no lograba comprender algunas cosas, sin embargo, con la práctica poco a poco fui entendiendo cada uno de los conceptos haciendo que el stack MERN se convirtiera en uno de mis favoritos. En este proyecto aprendimos como verificar formularios y usuarios mediante React, hashear password mediante Bcrypt y crear rutas protegidas solamente para usuarios registrados permitiendo que cada usuario pueda ingresar solo a los pacientes que tiene registrados con su ID.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567180/QuioscoApp_ooie3v.mp4'>QuioscoApp</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/QuioscoApp.png" alt="Proyecto QuioscoApp" data-frontend='https://github.com/elkincarreno10/quioscoapp' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto fullstack realizado con Next.js, Prisma, MySQL, TailwindCSS y useSWR, este proyecto fue uno de mis favoritos del curso debido a lo completo que era y me permitió aprender el manejo de bases de datos con Prisma y las ventajas que ofrece este OMR, además pude seguir aprendiendo react y tailwindCSS, finalmente utlizamos  useSWR para obtener datos de la API en tiempo real gracias a lo estrategia que tiene de State While Revalidate.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567245/GuitarLA_ulwx5q.mp4'>GuitarLA</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/GuitarLA.png" alt="Proyecto GuitarLA" data-frontend='https://github.com/elkincarreno10/guitarlaNext' />
            <p className="line-clamp-4 md:line-clamp-6" data-backend='https://github.com/elkincarreno10/guitarlaStrapi' data-enlace='https://guitarla-next-seven-zeta.vercel.app/'>Proyecto realizado en el curso de React, este proyecto fue realizado en 3 frameworks diferentes, Remix, Next.js y Astro en el cual aprendí como utilizar cada uno de los frameworks y las ventajas que tiene cada uno, me sorprendió mucho Astro ya que tiene una manera muy limpia de trabajar y permite mostrar diferentes contenidos en el servidor y el cliente de una manera muy fácil y eficiente. Aprendí además el manejo de contextAPI con estos frameworks y a utilizar Strapi, una excelente herramienta muy amigable para el manejo de datos, adicionalmente almacenamos las imágenes en cloudinary ya que permite manejar diferentes formatos y finalmente utilizamos localstorage para almacenar los productos del carrito de compras de manera persitente.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567189/AgenciaViajes_oyuu1y.mp4'>Agencia de Viajes</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/AgenciaViajes.png" alt="Proyecto Agencia de Viajes" data-frontend='https://github.com/elkincarreno10/agenciaViajesNode' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto realizado en el curso de JavaScriptModerno, en este proyecto utilicé por primera vez JavaScript para crear el frontend y el backend de una aplicación en el cual utilizamos Pug JS para crear plantillas y express para el manejo de los datos en el backend con Node.js, mediante estas tecnologías creamos páginas dinámicas que podíamos administrar desde la base de datos para agregar y quitar testimoniales y destinos de viajes de una manera rápida y eficiente.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567076/CRM_React_mmjjkh.mp4'>CRM React</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/CRM_React.png" alt="Proyecto CRM React" data-frontend='https://github.com/elkincarreno10/CRM_React' />
            <p className="line-clamp-4 md:line-clamp-6">En este proyecto realizado en el curso de React aprendí a utilizar react-router-dom para tener una aplicación con más de una página, además de otras excelente herramientas que ofrece react-router-dom como los son useNavigate, redirect, Link, y para el manejo de formularios loader y action. Además utilizamos fetch para consumir una API creada por nosotros mediante json-server, esto es una API falsa utilizada como práctica debido a que en un proyecto real esta API será creada por el equipo del backend. Mediante este proyecto pude afianzar conocimientos que tenía sobre fetch, async y await, utilizando los 4 verbos del CRUD para administrar los clientes en la aplicación.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567147/ReactNodeSend_oliohy.mp4'>ReactNodeSend</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/ReactNodeSend.png" alt="Proyecto ReactNodeSend" data-frontend='https://github.com/elkincarreno10/nodesend_frontend' />
            <p className="line-clamp-4 md:line-clamp-6" data-backend='https://github.com/elkincarreno10/nodesend_backend'>Proyecto final del cuso de react en el cual continuamos practicando todo tipo de validaciones tanto en el cliente como en el servidor, en este proyecto pude seguir practicando también el manejo de NodeJs para backend, además aprendí a manejar archivos con la base de datos para permitirle al usuario descargarlos. También trabajamos con react y continuamos aprendiendo el manejo de context API y Tailwindcss para los estilos.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567190/ControlGastos_sfiu7d.mp4'>Control Gastos</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/ControlGastos.png" alt="Proyecto Control de Gastos" data-frontend='https://github.com/elkincarreno10/ControlGastosReact' />
            <p className="line-clamp-4 md:line-clamp-6" data-enlace='https://control-gastos-react-seven.vercel.app/'>Proyecto realizado en el curso de React – La guía completa, en este proyecto profundizamos más en los conceptos de React creando una aplicación más interactiva en la cual le permitimos al usuario tener control sobre sus gastos mediante una interfaz interactiva que almacena los datos en localStorage, permitiendo que los datos no se perdieran aunque se recargara la página, además mediante la librería react-swipeable-list creamos una animación sobre cada gasto que nos permitía editar o eliminar el gasto rápidamente de una manera muy dinámica, finalmente añadimos una barra circular dinámica para que el usuario pudiera ver como van sus gastos respecto a su presupuesto de una forma visualmente atractiva.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567733/DevWebCamp_jinmcs.mp4'>DevWebCamp</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/DevWebCamp.png" alt="Proyecto DevWebCamp" data-frontend='https://github.com/elkincarreno10/DevWebCamp' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto final del curso de Desarrollo Web Completo, en este proyecto final aplicamos todo lo aprendido durante el curso en tecnologías como PHP, SASS, JavaScript y MySQL, creando el frontend y el backend de la aplicación desde 0, en este proyecto utilizamos SASS para darle estilos a todos los elementos de la aplicación aprendiendo los grandes beneficios que SASS ofrece en el desarrollo del frontend de una aplicación ya que permite tener el código muy organizado, adicionalmente importamos librerías de JavaScript para crear algunas animaciones en la aplicación lo cual me permitió abrir la mente a un nuevo mundo de posibilidades, y haciendo que me interesara mucho en el lenguaje de JavaScript.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567213/VirtualShop_ylwz0k.mp4'>Virtual Shop</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/VirtualShop.png" alt="Proyecto VirtualShop" data-frontend='https://github.com/elkincarreno10/virtual_shop' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto propio desarrollado con la intención de afianzar todo lo aprendido en el curso de Desarrollo Web Completo en el cual realicé un CRUD con PHP para agregar artículos y usuarios a mi tienda virtual, CRUD en el cual solo los usuarios establecidos como administradores podían realizar operaciones, además de esto realicé todo el diseño frontend utilizando SASS al comienzo tuve problemas debido a que me costaba organizar el código, pero con el tiempo se convirtió en mi mejor alternativa para tener mejor organizados los estilos, finalmente utilicé JavaScript para darle un poco de animación a la tienda virtual y agregué el slider para los banners de la página principal y un carrito de compras que permite agregar productos y quitarlos, en su momento fue un logro muy importante para mi y me lleno de satisfacción.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567068/CotizadorPrestamos_lb2nhq.mp4'>Cotizador de Préstamos</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/CotizadorPrestamos.png" alt="Proyecto Cotizador de Préstamos" data-frontend='https://github.com/elkincarreno10/cotizadorPrestamos' />
            <p className="line-clamp-4 md:line-clamp-6" data-enlace='https://cotizador-prestamos-gold.vercel.app/'>Proyecto realizado en el curso de React – La guía completa, en este proyecto utilizamos los conceptos más básicos de React para crear una aplicación interactiva que permitiera a los usuarios cotizar un préstamo, en el cual mediante los Hooks useState y useEffect pudimos hacer que la aplicación fuera muy interactiva y respondiera rápidamente a los cambios que el usuario realizara.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567090/CotizadorSeguros_y63m73.mp4'>Cotizador de Seguros</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/CotizadorSeguros.png" alt="Proyecto Cotizador de Seguros" data-frontend='https://github.com/elkincarreno10/cotizadorSeguros' />
            <p className="line-clamp-4 md:line-clamp-6" data-enlace='https://cotizador-seguros-bay.vercel.app/'>Proyecto realizado con react, en este proyecto utilizamos context API para pasar los datos a los componentes directamente para evitar ir componente por componente, además vimos el uso de useCallback y useRef, para los estilos utilizamos TailwindCSS.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676684153/BienesRaices_qpwikr.mp4'>Bienes Raices</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/BienesRaices.png" alt="Proyecto Bienes Raices" data-frontend='https://github.com/elkincarreno10/Bienes_Raices' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto realizado en el curso de Desarrollo Web Completo, en este proyecto utilicé por primera vez el patrón de arquitectura Model View Controller (MVC), en este proyecto di mis primeros pasos en un proyecto FullStack en este caso con PHP, lenguaje que me ayudó a entender los conceptos más básicos de desarrollo del Backend de un aplicación como lo son los 4 verbos del CRUD y a entender los conceptos fundamentales que hay detrás de un framework, ya que en este proyecto creamos nuestro propio framework de PHP desde 0 el cual nos permitió realizar cualquier tipo de interacción con la base de datos, manteniendo siempre la seguridad de los datos y hasheando datos sensibles como lo pueden ser passwords.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567064/CotizadorCriptomonedas_toqcty.mp4'>Criptomonedas</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/CotizadorCriptomonedas.png" alt="Proyecto Criptomonedas" data-frontend='https://github.com/elkincarreno10/criptomonedasReact' />
            <p className="line-clamp-4 md:line-clamp-6">En este proyecto mediante la consulta a una API obtenemos información sobre una determinada criptomoneda, estas criptomonedas a su vez son las 10 criptomonedas con más valor en el mercado, y esto se obtiene mediante la consulta a un endpoint de la API. Los resultados obtenidos se presentaban en el valor de la moneda seleccionada por el usuario en el listado de monedas que es estático que definimos nosotros, en el cual se encuentran monedas como el dólar y el peso colombiano, en este proyecto creamos un Hook propio que utilizamos para evitar repetir código y hacer más rápida la creación de algunos elementos.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567040/ClimaApp_pajbfy.mp4'>ClimaApp</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/ClimaApp.png" alt="Proyecto ClimaApp" data-frontend='https://github.com/elkincarreno10/climaApp' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto realizado con react, utilizando Context API y agregando la consulta a una API del clima para obtener los resultados, para realizar la consulta a la API se utilizó axios.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='https://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567158/BuscadorNoticias_fhuder.mp4'>Buscador Noticias</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/BuscadorNoticias.png" alt="Proyecto Buscador Noticias" data-frontend='https://github.com/elkincarreno10/noticiasApp' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto realizado con react y el framework material-ui, utilizando Context API y agregando la consulta a una API de noticias para obtener los resultados, para realizar la consulta a la API se utilizó axios.</p>
        </div>
        <div 
          className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg shadow-xl flex flex-col gap-5 items-center max-w-xs cursor-pointer"
          onClick={handleProyecto}
        >
            <h2 className="text-indigo-600 font-bold text-xl" data-video='hhttps://res.cloudinary.com/dqdo4jlkx/video/upload/v1676567152/BuscadorBebidas_g8irkf.mp4'>Buscador Bebidas</h2>
            <img className="w-60 md:w-auto" src="/img/proyectos/BuscadorBebidas.png" alt="Proyecto Buscador Bebidas" data-frontend='https://github.com/elkincarreno10/buscadorBebidas' />
            <p className="line-clamp-4 md:line-clamp-6">Proyecto realizado con react, context API y react-bootstrap, para este proyecto creamos dos hooks propios para la consulta a la API de bebidas, además aprendí el poder de los componentes que ofrece react-bootstrap.</p>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
