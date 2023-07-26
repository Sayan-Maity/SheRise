import React from 'react'
import '../footer/Footer.css'
import { AiOutlineCopyright }from "react-icons/ai";

const Footer = () => {
  return (
    <>
    <div className='footer-main-outer'>
    <div className="footer">
      
      <div className="lower-footer">
        <div className="copyright"><AiOutlineCopyright/> <p>2023 <span>SheRise</span> - All Rights Reserved</p></div>
        <div className="designation"><p>Developed by <span>PokemonCodes </span>Team</p></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer
