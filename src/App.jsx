import { useState } from 'react'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import InvoiceHeading from './components/InvoiceHeading'

function App() {
 

  return (
    <Routes>      
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Homepage/>} />
        
        </Routes>
  )
}

export default App
