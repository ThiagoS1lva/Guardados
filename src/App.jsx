import InstaPage from "./pages/InstaPage"
import Home from "./pages/Home"
import Conversor from "./pages/Conversor"
import Footer from "./ui/components/Footer"
import { Route, Routes } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react'
import { Contexts } from './data/context/UserContext'

import './App.css'
import Login from "./pages/Login"
import Politica from "./pages/politica"
function App() {


  return (
    <>
      <Contexts>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insta" element={<InstaPage />} />
          <Route path="/Conversor" element={<Conversor />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/politica" element={<Politica/>}/>
        </Routes>
        <Footer />
        <Analytics />
      </Contexts>
    </>
  )
}

export default App
