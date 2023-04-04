import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Formacion = () => {
  return (
    <div className="w-auto lg:mx-auto md:max-w-2xl xl:max-w-4xl text-center mt-8 mx-8">
        <h1 className="uppercase text-3xl text-indigo-600 font-extrabold">Sobre Mi</h1>
        <div className="mt-6 mb-10 space-y-3 text-left">
          <p>
            <span className="font-bold">Ingeniero Civil y Programador fullstack</span> en diferentes tecnologías en las que se destacan principalmente <span className="font-bold">Javascript y Python</span>, en las cuales puedo ofrecer soluciones eficientes y con buenas prácticas de programación tanto del lado del cliente con <span className="font-bold">ReactJs</span> como del servidor mediante <span className="font-bold">NodeJs y FastAPI</span>. Además, puedo utilizar sistemas de control de versiones como <span className="font-bold">Git y GitHub</span> mediante el flujo de trabajo <span className="font-bold">Git Flow</span>.
          </p>
          <p>
            Mientras me formaba como programador he adquirido experiencia con los servicios de computación en la nube ofrecidos por <span className="font-bold">AWS</span> como son <span className="font-bold">S3, EC2, ECS, ApiGateway, DynamoDB y Lambda</span>, entendiendo como aplicar estos servicios para crear proyectos que sean eficientes y sean fácilmente escalables mediante <span className="font-bold">AWS CDK</span>.
          </p>
          <p>
            Durante mi formación como <span className="font-bold">ingeniero y programador</span> he aprendido a adaptarme rápidamente a nuevos entornos gracias a mis habilidades de comunicación y el compromiso con mi equipo de trabajo. Soy una persona que enfrenta los retos de manera <span className="font-bold">optimista</span>, siempre <span className="font-bold">dispuesto a aprender</span> y a <span className="font-bold">mejorar</span>.
          </p>
        </div>

        <div className="mb-8 text-left shadow-lg shadow-indigo-600 p-3 rounded-lg">
          <h2 className="mb-2">En el siguiente enlace puedes encontrar uno de los trabajos que he realizado:</h2>
          <p className="font-bold text-xl">
            <a href="https://fullstackelkin.com" className="text-indigo-600 hover:text-indigo-400" target='_blank'>
              - Administrador de Clientes
            </a>
          </p>
        </div>

        <div className="text-left flex flex-col md:flex-row gap-3">
          <p className="font-bold text-indigo-600">Encuentrame en: </p>
          <a href="https://www.linkedin.com/in/elkin-carre%C3%B1o/" target='_blank' className="flex items-center gap-1">
            <FaLinkedin className='w-5 h-5' />
            <h2 className="text-md hover:text-indigo-600">LinkedIn</h2>
          </a>
          <a href="https://github.com/elkincarreno10" target='_blank' className="flex items-center gap-1">
            <FaGithub className='w-5 h-5' />
            <h2 className="text-md hover:text-indigo-600">GitHub</h2>
          </a>
        </div>

        <h1 className="uppercase text-2xl font-extrabold mt-16">Formación</h1>
        <div className="grid md:grid-cols-2 gap-8 mt-8 text-left mb-24">
          <div className="bg-gray-200 p-5 shadow-lg shadow-indigo-600 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Ultimate AWS Certified Developer Associate 2023 <span className="text-indigo-500">(Udemy)</span></h2>
            <h3 className="text-indigo-600 font-bold">- Duración: <span className="font-normal text-black">34 Horas</span></h3>
            <p className="text-indigo-600 font-bold">- Tecnologías: <span className="font-normal text-black">S3, EC2, Funciones Lambda, DynamoDB, APIGateway, CloudFormation</span></p>
            <p className="text-indigo-600 font-bold">- Certificado: <a target='_blank' href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-a6ad240d-ba45-485e-a474-4ccb2c02ebf5.pdf" className="font-bold text-black hover:text-gray-700">Ver Certificado</a></p>
          </div>
          <div className="bg-gray-200 p-5 shadow-lg shadow-indigo-600 rounded-lg">
            <h2 className="text-xl font-bold mb-4">TypeScript sin Fronteras: Guía Definitiva <span className="text-indigo-500">(Udemy)</span></h2>
            <h3 className="text-indigo-600 font-bold">- Duración: <span className="font-normal text-black">5.5 Horas</span></h3>
            <p className="text-indigo-600 font-bold">- Tecnologías: <span className="font-normal text-black">TypeScript, Integración con React, NodeJs</span></p>
            <p className="text-indigo-600 font-bold">- Certificado: <a target='_blank' href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-ef6a40c6-1164-42a0-9122-9563ff36be79.pdf" className="font-bold text-black hover:text-gray-700">Ver Certificado</a></p>
          </div>
          <div className="bg-gray-200 p-5 shadow-lg shadow-indigo-600 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Node.js - Bootcamp Desarrollo Web inc. MVC y REST APIs <span className="text-indigo-500">(Udemy)</span></h2>
            <h3 className="text-indigo-600 font-bold">- Duración: <span className="font-normal text-black">42 Horas</span></h3>
            <p className="text-indigo-600 font-bold">- Tecnologías: <span className="font-normal text-black">NodeJs, Express, HandleBars, EmbeddedJavascript, PUG, ReactJs, MySQL, PistgreSQL, MongoDB, TailwindCSS</span></p>
            <p className="text-indigo-600 font-bold">- Certificado: <a target='_blank' href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-2a499f5b-c3db-448f-9fd1-bd0dc6e16df4.pdf" className="font-bold text-black hover:text-gray-700">Ver Certificado</a></p>
          </div>
          <div className="bg-gray-200 p-5 shadow-lg shadow-indigo-600 rounded-lg">
            <h2 className="text-xl font-bold mb-4">React - La Guía Completa: Hooks Context Redux MERN +15 Apps <span className="text-indigo-500">(Udemy)</span></h2>
            <h3 className="text-indigo-600 font-bold">- Duración: <span className="font-normal text-black">66.5 Horas</span></h3>
            <p className="text-indigo-600 font-bold">- Tecnologías: <span className="font-normal text-black">ReactJs, Context API, Redux, NextJs, NodeJs, TailwindCSS</span></p>
            <p className="text-indigo-600 font-bold">- Certificado: <a target='_blank' href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-d4df7c7b-591f-481c-a6f2-6a831d47d4b7.pdf" className="font-bold text-black hover:text-gray-700">Ver Certificado</a></p>
          </div>
          <div className="bg-gray-200 p-5 shadow-lg shadow-indigo-600 rounded-lg">
            <h2 className="text-xl font-bold mb-4">JavaScript Moderno Guía Definitiva Construye +20 Proyectos <span className="text-indigo-500">(Udemy)</span></h2>
            <h3 className="text-indigo-600 font-bold">- Duración: <span className="font-normal text-black">50 Horas</span></h3>
            <p className="text-indigo-600 font-bold">- Tecnologías: <span className="font-normal text-black">JavaScript, ReactJs, ES6</span></p>
            <p className="text-indigo-600 font-bold">- Certificado: <a target='_blank' href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-b30729b3-16f2-4888-b46e-a9299c25e2ad.pdf" className="font-bold text-black hover:text-gray-700">Ver Certificado</a></p>
          </div>
          <div className="bg-gray-200 p-5 shadow-lg shadow-indigo-600 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL <span className="text-indigo-500">(Udemy)</span></h2>
            <h3 className="text-indigo-600 font-bold">- Duración: <span className="font-normal text-black">82.5 Horas</span></h3>
            <p className="text-indigo-600 font-bold">- Tecnologías: <span className="font-normal text-black">HTML5, CSS3, JavaScript, PHP, MySQL</span></p>
            <p className="text-indigo-600 font-bold">- Certificado: <a target='_blank' href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-a6da7c78-256f-4d6a-aed2-0779daf0e25a.pdf" className="font-bold text-black hover:text-gray-700">Ver Certificado</a></p>
          </div>
        </div>
    </div>
  )
}

export default Formacion
