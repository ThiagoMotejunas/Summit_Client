import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<>HOME</>} />
        <Route path="/about" element={<>ABOUT</>} />
        <Route path="/contact" element={<>CONTACT</>} />
      </Routes>
    </div>
  )
}

export default App