import { useState } from "react"

import Proyectos from "../components/Proyectos"
import ModalProyecto from "../components/ModalProyecto"

const Projects = () => {

  const [ activarModal, setActivarModal ] = useState(false)
  const [ proyecto, setProyecto ] = useState({})

  const modal = () => {
    setActivarModal(!activarModal)
  }

  return (
    <>
      <Proyectos modal={modal} setProyecto={setProyecto} />

      <ModalProyecto activarModal={activarModal} setActivarModal={setActivarModal} proyecto={proyecto} />
    </>
  )
}

export default Projects