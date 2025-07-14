import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/courses/favorite" element={<HomePage />} />
          <Route path="/areas/favorite" element={<HomePage />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App