
const Formacion = () => {
  return (
    <div className="w-auto lg:mx-auto md:max-w-2xl xl:max-w-4xl text-center mt-8 mx-8">
        <h1 className="uppercase text-2xl font-extrabold">Sobre Mi</h1>
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

        <div className="text-left flex gap-3">
          <p className="font-bold text-indigo-600">Encuentrame en: </p>
          <a href="https://www.linkedin.com/in/elkin-carre%C3%B1o/" target='_blank' className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <h2 className="text-md hover:text-indigo-600">LinkedIn</h2>
          </a>
          <a href="https://github.com/elkincarreno10" target='_blank' className="flex gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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
