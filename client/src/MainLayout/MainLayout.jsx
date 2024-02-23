import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../layout/Navbar/Navbar'
import Footer from '../layout/Footer/Footer'

const MainLayout = () => {
  return (
    <>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </>
  )
}

export default MainLayout