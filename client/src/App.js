import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Register from './components/Register/Register'
import Contact from './components/Contact/Contact';
import Success from './components/Succes/Success';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Hero/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='register' element={<Register/>}></Route>
      <Route path='success' element={<Success/>}></Route>
    </Routes>
  
    </BrowserRouter>
  )
}

export default App
