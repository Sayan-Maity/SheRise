import React, { useEffect, useState } from 'react'
import '../footer/Footer.css'
import { AiOutlineCopyright }from "react-icons/ai";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };
    const intervalId = setInterval(updateYear, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
    <div className='footer-main-outer'>
    <div className="footer">
      
      <div className="lower-footer">
        <div className="copyright"><AiOutlineCopyright/> <p>{currentYear} <span>SheRise</span> - All Rights Reserved</p></div>
        <div className="designation"><p>Developed by <span>PokemonCodes </span>Team</p></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer
