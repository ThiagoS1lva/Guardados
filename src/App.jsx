import InstaPage from "./pages/InstaPage"
import Home from "./pages/Home"
import Conversor from "./pages/Conversor"
import { Route, Routes } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react'

import './App.css'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insta" element={<InstaPage />} />
        <Route path="/Conversor" element={<Conversor />} />
      </Routes>
      <Analytics/>
    </>
  )
}

export default App
