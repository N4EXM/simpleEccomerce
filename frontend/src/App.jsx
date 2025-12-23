import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path='/'
          element={
            <Shop/>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App