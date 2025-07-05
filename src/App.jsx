import { useState } from 'react'
import Home from './components/home'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Plans from './components/plans'
import  Contact from './components/contact'
import Notfound from './components/notfound'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plans' element={<Plans/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
