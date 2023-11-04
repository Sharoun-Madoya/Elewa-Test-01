import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Views/Navbar'
import Footer from './components/Views/Footer'
import LandingPg from './components/Views/LandingPage'
import Land2Pg from './components/Views/Land2'

function App() {
  return (
    <div>
    <NavBar/>
    <LandingPg/><br></br>
    <Land2Pg/>
    </div>
  )
}

export default App
