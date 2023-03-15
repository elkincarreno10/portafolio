
const Formacion = () => {
  return (
    <div className="w-auto lg:mx-auto md:max-w-2xl xl:max-w-4xl text-center mt-8 mx-8">
        <h1 className="uppercase text-2xl font-extrabold">Sobre Mi</h1>
        <div className="mt-6 mb-10 space-y-3 text-left">
          <p>
            <span className="font-bold">Ingeniero Civil y Programador fullstack</span> en diferentes tecnologías en las que se destacan principalmente <span className="font-bold">Javascript</span>, en el cual puedo ofrecer soluciones eficientes y con buenas prácticas de programación tanto del lado del cliente como del servidor mediante <span className="font-bold">ReactJs y NodeJs</span>. Además de esto puedo ofrecer soluciones en otras tecnologías como <span className="font-bold">Python</span> y puedo utilizar sistemas de control de versiones como <span className="font-bold">Git y GitHub</span> mediante el flujo de trabajo <span className="font-bold">Git Flow</span>.
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

        <h1 className="uppercase text-2xl font-extrabold">Formación</h1>
        <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
          <div className="bg-gray-200 p-3 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Ultimate AWS Certified Developer Associate 2023 <span className="text-indigo-500">(Udemy 34-Horas)</span></h2>
            <p>- Fundamentos de AWS: IAM, EC2, Load Balancing, Auto Scaling, EBS, Route 53, RDS, ElastiCache, S3</p>
            <p>- AWS CLI: CLI setup, uso en EC2, buenas prácticas, SDK, uso avanzado</p>
            <p>- Adecuado deploy de una aplicación: AWS Elastic Beanstalk, CICD, CodeCommit, CodePipeline, CodeBuild, CodeDeploy</p>
            <p>- Infraestructura como código con AWS CloudFormation</p>
            <p>- Supervisión, solución de problemas y auditoría: AWS CloudWatch, X-Ray, CloudTrail</p>
            <p>- AWS Integration & Messaging: SQS, SNS, Kinesis</p>
            <p>- AWS Serverless: AWS Lambda, DynamoDB, API Gateway, Cognito, Serverless Application Model (SAM)</p>
            <p>- ECS, ECR & Fargate: Docker en AWS</p>
            <p>- AWS Security: KMS, Encryption SDK, SSM Parameter Store, IAM Policies</p>
            <p>- Otros servicios de AWS (Descripción General): CloudFront, Step Functions, SWF, Redshift</p>
          </div>
          <div className="bg-gray-200 p-3 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">TypeScript sin Fronteras: Guía Definitiva <span className="text-indigo-500">(Udemy 5.5-Horas)</span></h2>
            <p>- Tipos Básicos</p>
            <p>- Tipos Avanzados</p>
            <p>- Programación orientada a objetos</p>
            <p>- Genéricos</p>
            <p>- Módulos</p>
            <p>- Integración con JavaScript</p>
            <p>- Integración con NodeJS</p>
            <p>- Integración con ReactJS</p>
          </div>
          <div className="bg-gray-200 p-3 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Node.js - Bootcamp Desarrollo Web inc. MVC y REST APIs <span className="text-indigo-500">(Udemy 42-Horas)</span></h2>
            <p>- Nodejs y Express Desarrollo de sitios y aplicaciones Web</p>
            <p>- Agregar bases de datos a tus aplicaciones Node (MySQL, PostgreSQL y MongoDB)</p>
            <p>- Utilizar un ORM para acelerar el proceso de crear aplicaciones</p>
            <p>- Aprender la arquitectura MVC para crear sitios y aplicaciones</p>
            <p>- Integrar Template Engines como Pug</p>
            <p>- Subir Archivos en Node</p>
            <p>- Autenticar Usuarios</p>
            <p>- Enviar Emails</p>
            <p>- Integrar Webpack, axios, JavaScript en tus aplicaciones Node</p>
            <p>- Integrar Mapas (Leaflet) en tus aplicaciones</p>
            <p>- Utilizar Postgis en tus aplicaciones Node</p>
            <p>- Crear increibles proyectos Node, en todos los videos tendrás mucho aprendizaje</p>
            <p>- Crear REST API's en Node</p>
          </div>
          <div className="bg-gray-200 p-3 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">React - La Guía Completa: Hooks Context Redux MERN +15 Apps <span className="text-indigo-500">(Udemy 66.5-Horas)</span></h2>
              <p> - El curso incluye SSR, Gatsby, Nextjs, MERN, Styled Components, Context</p>
              <p> - Crear proyectos con Redux y React Redux (con Hooks)</p>
              <p> - Crear Más de 15 Proyectos con React</p>
              <p> - Conocer React a fondo</p>
              <p> - Conocer que es son los Hooks y crear tus propios Hooks</p>
              <p> - Utilizar Fetch API y Axios con React para consumir API's</p>
              <p> - Integrar React con otras tecnologías JavaScript como Local Storage</p>
              <p> - Crear aplicaciones y request CRUD con React</p>
              <p> - Conocer Server Side Rendering con React con Nextjs y Gatsby</p>
              <p> - Deployment de Aplicaciones en React en Netlify, Heroku, Vercel y mucho más</p>
              <p> - Crear Proyectos en React y escribir código React que siga las buenas prácticas</p>
              <p> - Crear Proyectos con Nextjs y Gatsby</p>
              <p> - Integrar Mongo Express y Node con React</p>
              <p> - Aprender los Hooks useReducer y useContext</p>
          </div>
          <div className="bg-gray-200 p-3 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">JavaScript Moderno Guía Definitiva Construye +20 Proyectos <span className="text-indigo-500">(Udemy 50-Horas)</span></h2>
            <p> - Consumo de distintas REST APIS con JSON y Fetch API + Async / Await </p>
            <p> - Desde lo básico del lenguaje así como conceptos más avanzados </p>
            <p> - Aprender programación orientada a objetos con Classes (ES6) y Prototypes (ES5) </p>
            <p> - Aprender conceptos nuevos en ES6 como Template Literals, arrow functions, generadores, iteradores, promises, async / await, fetch api </p>
            <p> - Aprender programación Asincrona con Promises, Callbacks y Async Await </p>
            <p> - Gran cantidad de proyectos, consumiendo REST API's y otros con código puro de JavaScript </p>
            <p> - Agregar interacción a tus aplicaciones y páginas web </p>
          </div>
          <div className="bg-gray-200 p-3 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Desarrollo Web Completo con HTML5, CSS3, JS AJAX PHP y MySQL <span className="text-indigo-500">(Udemy 82.5-Horas)</span></h2>
            <p> - Crear un íncreible Portafolio con muchos proyectos que te ayudarán a obtener un empleo</p>
            <p> - Aprender y Dominar HTML y CSS para crear diseños modernos siguiendo buenas prácticas</p>
            <p> - Aprender Metodologias HTML y CSS como Módulos y BEM</p>
            <p> - Crear páginas web con HTML y CSS que puedas vender a tus clientes</p>
            <p> - Escribir código JavaScript Moderno (ES6)</p>
            <p> - Crear sitios web dínamicos con PHP y MYSQL</p>
            <p> - Entender como funciona JavaScript, PHP y Fetch API</p>
            <p> - Aplicar a un empleo de Desarrollador Web Junior</p>
            <p> - Aprender a crear sitios dínamicos, que utilicen bases de datos para almacenar y obtener información</p>
            <p> - Crear aplicaciones CRUD con PHP y MySQL</p>
            <p> - Agregar pagos de PayPal a tus sitios web</p>
            <p> - Crear aplicaciones seguras con PHP y MySQL</p>
          </div>
        </div>
    </div>
  )
}

export default Formacion
