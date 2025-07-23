import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NavbarHolder from './components/NavbarHolder'

import './app.css';
import CoursesPage from './pages/CoursesPage'

const App: React.FC = () => {
  return (
    <div className='grid-named min-h-screen'>
      <div style={{ gridRow: 'navbar' }}>
        <NavbarHolder />
      </div>
      <div style={{ gridRow: 'content' }} className='h-full'>
        <Routes >
          <Route path='/login' element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/areas/favorites" element={<NotFound />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App