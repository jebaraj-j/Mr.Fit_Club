import React from 'react'
import '../App.css'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className="footer-cont">
        <h1 className='logo'><span>MR.</span> FIT CLUB</h1>
        <ul className='footer-links'>
          <li><a href="/"><span>H</span>ome</a></li> 
            <li><a href="/plans"><span>P</span>lans</a></li>
            <li><a href="/contact"><span>C</span>ontact</a></li>
        </ul>
        </div>
            <p>&copy; 2023 MR. FIT CLUB. All rights reserved.</p>
        </div>
    </>
  )
}

export default Footer
