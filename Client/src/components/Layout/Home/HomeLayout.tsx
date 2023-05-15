import React from 'react'
import { Header, Footer } from '../../Static'
import {Outlet} from "react-router-dom"

const HomeLayout = () => {
  return (
      <div>
          <Header />
          <Outlet />
          <Footer />
    </div>
  )
}

export default HomeLayout