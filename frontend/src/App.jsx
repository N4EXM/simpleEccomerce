import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import ProtectedRoute from './components/auth/ProtectedRoute'
import RoleProtectedRoute from './components/auth/RoleProtectedRoute'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* shop */}
        <Route
          index
          path='/'
          element={
            <Shop/>
          }
        />

        {/* item page */}
        <Route
          path='/item/:id'
        />

        {/* user cart page */}
        <Route
          path='/Cart'
          element={
            <ProtectedRoute>
              <Cart/>
            </ProtectedRoute>
          }
        />

        {/* dashboard */}
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />

        {/* admin dashboard */}
        <Route
          path='/admin'
          element={
            <RoleProtectedRoute>
              <AdminDashboard/>
            </RoleProtectedRoute>
          }
        />


      </Routes>
    </BrowserRouter>
  )
}

export default App