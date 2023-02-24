
const Contacto = () => {
  return (
    <div className="bg-gray-200 p-10 rounded-lg shadow-xl w-auto lg:mx-auto md:max-w-2xl xl:max-w-4xl text-center mt-8 mx-8">
      <h1 className="uppercase text-2xl font-extrabold mb-12">Contacto</h1>
      <div className="grid grid-cols-2 gap-5 mb-20">
        <img src="/img/Flecha.png" alt="Flecha Contacto" className="w-72 animate-pulse"/>
        <div className="flex flex-col gap-3 justify-center">
            <a href="https://www.linkedin.com/in/elkin-carre%C3%B1o/" className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="hover:bg-indigo-600 hover:rounded"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <h2 className="text-xl hover:text-indigo-700">LinkedIn</h2>
            </a>
            <div className="flex gap-3">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-.141-6.333c.63 0 1.141-.512 1.141-1.142v-9.05c0-.63-.511-1.142-1.141-1.142h-13.718c-.63 0-1.141.512-1.141 1.142v9.05c0 .63.511 1.142 1.141 1.142h13.718zm-6.859-4.058l-6.228-4.321-.014 7.712h12.457v-7.712l-6.215 4.321zm5.913-6.609c-1.745 1.215-5.913 4.153-5.913 4.153l-5.947-4.153h11.86z"/></svg>
                <h2 className="text-xl break-all">elquin50000@gmail.com</h2>
            </div>
            <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z"/></svg>
                <h2 className="text-xl">546551 Ocaña, Colombia</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
