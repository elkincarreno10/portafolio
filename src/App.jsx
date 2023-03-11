import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LayoutPrincipal from "./layout/LayoutPrincipal"

import Inicio from "./pages/Inicio"
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path='habilidades' element={<Skills />} />
          <Route path='proyectos' element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
