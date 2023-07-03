import { useState } from "react"
import Contacto from "./components/Contacto"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import Des from "./components/Des"



function App() {

  const [id,setId] = useState(0)

  
  return (
    <div className="min-h-screen bg-neutral-700">
        
        <Routes>

          <Route path="/" element={<Home setId={setId} id={id} />} />
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/descripcion" element={<Des id={id} />}/>

        </Routes>

    </div>
  )
}

export default App
