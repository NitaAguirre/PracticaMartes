import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import BarraTitulo from './componentes/BarraTitulo'
import Inicio from './paginas/Inicio'
import OfertaCurso from './paginas/oferta-curso'
import Footer from './componentes/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='m-2'>
        <BarraTitulo />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/oferta-curso" element={<OfertaCurso />} />
        </Routes>
        <Inicio></Inicio>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
