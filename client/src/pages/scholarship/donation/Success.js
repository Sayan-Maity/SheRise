import React, {useEffect, useState} from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import Scholarship from '../Scholarship'
import './Donation.css'
import ReactConfetti from 'react-confetti'

const Success = () => {
  const [windowDimension, setDimension] = useState({width: window.innerWidth, height: window.innerHeight})

  const detectSize = () => {
    setDimension({width: window.innerWidth, height: window.innerHeight});
  }
  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [])

  return (
    <div className="success-donation">
      <ReactConfetti width={windowDimension.width} height={windowDimension.height} tweenDuration={1000} />
      <div className="success">
        <div className="success-div">
          <div className="circle-success">
            <div className="success-icon">
              <BsCheckCircle className=''/>
            </div>
          </div>
        </div>
        <div className="success-message">
          <p>Donation is completed ! </p>
          <p> <span>₹100</span> has been successfully donated to SheRise.org</p>
        </div>
        <div className="success-home-div">
          <NavLink to="/scholarship"  key={<Scholarship/>} className="success-home-btn"><p>Home</p></NavLink>
        </div>

      </div>
    
    </div>
  )
}

export default Success
