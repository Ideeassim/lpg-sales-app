import { useState } from 'react'
import Login from './pages/Login'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import AccessoryInvoice from './components/AccessoryInvoice'


function App() {
 

  return (
    <Routes>      
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Homepage/>} />
        <Route path="/accessories" element={<AccessoryInvoice />}></Route>
        </Routes>
  )
}

export default App
