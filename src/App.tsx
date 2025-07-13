import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'

const App:React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<>HOME</>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App