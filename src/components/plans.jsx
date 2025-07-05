import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import '../App.css'
const Plans = () => {
  return (
    <>
        <Navbar/>
        <div className="plans-header">
      <h2><span>G</span>YM <span>P</span>LANS</h2>
        <div className="plans">
            <div className="plan plan1">
            <h2 className="plan-price"><span>Basic</span> Plan</h2>
            <p className='des'>Access to gym equipment and facilities</p>
            <p className='price'>$20/month</p>
            </div>
            <div className="plan plan2">
            <h2 className="plan-price"><span>Premium</span> Plan</h2>
            <p className='des'>Includes Basic Plan + Group classes</p>
            <p className='price'>$40/month</p>
            </div>
            <div className="plan plan3">
            <h2 className="plan-price"><span>VIP</span> Plan</h2>
            <p className='des'>Includes Premium Plan + Personal training sessions</p>
            <p className='price'>$60/month</p>
            </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Plans
