import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import { useState } from 'react'


export default function Layout() {

  return (
    <>
      <Menu  />
      <Header  />
      <Outlet />
      <Footer />
    </>
  )
}
