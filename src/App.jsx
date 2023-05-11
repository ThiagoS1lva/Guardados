import InstaPage from "./pages/InstaPage"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

import './App.css'
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insta" element={<InstaPage />} />
      </Routes>
    </>
  )
}

export default App
