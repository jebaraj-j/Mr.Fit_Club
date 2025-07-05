import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../App.css'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="contact">
        <div className="cont-det">
          <div className="cont-head">
            <h1><span>C</span>ontact</h1></div>
            <p>We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.</p>
            <p>Email: mrfitclub@gmail.com</p>
            <p>Contact: +91 7418196240</p>
            <p>Address: 123 Fitness Street, Gym City, Country</p>
            <p>opening hours:
            Monday to Friday: 6 AM - 10 PM</p>
            <p>Follow us on social media for updates and tips!</p>
            <p>Instagram: @mrfitclub</p>
            <p>Facebook: facebook.com/mrfitclub</p>
        
        </div>
        <div className="cont-form">
          <form>
            <input type="text" placeholder='Your Name' required />
            <input type="email" placeholder='Your Email' required />
            <textarea placeholder='Your Message' required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        

      </div>
      <Footer/>
    </>
  )
}

export default Contact
