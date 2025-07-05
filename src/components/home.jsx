import React from 'react'
import { Link } from 'react-router-dom'
import './home'
import Navbar from './navbar'
import '../App.css'
import Footer from './footer'


const Home = () => {
  return (
    <>
       <Navbar/>
        <div className="home">
          <div className="hero">
          <h1>Welcome to MR. FIT CLUB</h1>
          <p>Your journey to fitness starts here!</p>
          <Link to="/plans" className="btn">Explore Plans</Link>
          </div>
          <Footer/>
        </div>

    </>
  )
}

export default Home
