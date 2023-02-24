import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Sidebar"
import Navegacion from '../components/Navegacion';

const LayoutPrincipal = () => {
  return (
    <div className="md:flex">
        <Sidebar />

        <main className="flex flex-col flex-1">
            <Navegacion />
            <Outlet />
        </main>
    </div>
  )
}

export default LayoutPrincipal
