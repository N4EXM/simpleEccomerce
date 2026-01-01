import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div
      className='w-full h-screen max-h-screen grid grid-cols-12 grid-rows-12 relative bg-BG dark:bg-DBG font-poppins'
    >
      <Navbar/>
      {children}
    </div>
  )
}

export default Layout