import React from 'react'
import { NavLink } from 'react-router-dom'
import '../footer/Footer.css'
import { BsTwitter }from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiOutlineCopyright }from "react-icons/ai";
import { HiLocationMarker }from "react-icons/hi";
import { FaFacebookF, FaEnvelope }from "react-icons/fa";
import { BsGithub, BsFillTelephoneFill }from "react-icons/bs";
import LandingPage from '../../pages/landingPage/LandingPage';
import Developers from '../../pages/developers/Developers';
import ContactUs from '../../pages/contactUs/ContactUs';

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
