import React from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import Scholarship from '../Scholarship'
import './Donation.css'

const Cancel = () => {
  return (
    <div className="cancel-donation">
      <div className="cancel">
        <div className="cancel-div">
          <div className="circle-cancel">
            <div className="cancel-icon">
              <RxCrossCircled className=''/>
            </div>
          </div>
        </div>
        <div className="cancel-message">
          <p>Oops, Something went Wrong ! </p>
          <p>Your donation of <span>₹100</span> to SheRise.org failed !</p>
        </div>
        <div className="cancel-home-div">
          <NavLink to="/scholarship"  key={<Scholarship/>} className="cancel-home-btn"><p>Try Again</p></NavLink>
        </div>

      </div>
    
    </div>
  )
}

export default Cancel
