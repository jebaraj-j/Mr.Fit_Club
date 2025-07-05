import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const Navbar = () => {
  return (
    <>
       <div className="navbar">
          <nav>
            <ul>
              <li><h1><span>MR.</span> FIT CLUB</h1></li>
              <li><Link to="/"><span>H</span>ome</Link></li>
              <li><Link to="/plans"><span>P</span>lans</Link></li>
              <li><Link to="/contact"><span>C</span>ontact</Link></li>
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Navbar
