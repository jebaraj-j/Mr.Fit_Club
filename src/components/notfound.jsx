import React from 'react'
import '../App.css'
import Navbar from './navbar'
import Footer from './footer'

const Notfound = () => {
  return (
    <>
    <Navbar/>
      <div className="notfound">
        <h1>Page Not Found</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Notfound
