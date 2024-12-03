import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import About from '../about/About'
import Skills from '../Skills/Skills'
import Proj from '../Proj/Proj'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
    <Nav/>
    <Home/>
    <About/>
    <Skills/>
    <Proj/>
    <Footer/>
    </>
  )
}
