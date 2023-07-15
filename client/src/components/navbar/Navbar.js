import React, { useRef, useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import Developers from "../../pages/developers/Developers";
import ContactUs from "../../pages/contactUs/ContactUs";
import logo from "../../assets/images/logo.svg";
import { magic } from "../../utils/magic";

import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import LandingPage from "../../pages/landingPage/LandingPage";
import Cookies from "js-cookie";
import Axios from "axios";
import Scholarship from "../../pages/scholarship/Scholarship";
import Dashboard from "../../pages/dashBoard/Dashboard";
import ReactGA from "react-ga4";

const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function call() {
      try {
        let resp = await Axios.get(
          process.env.REACT_APP_SERVER_URL + "/dashboard",
          {
            headers: {
              Authorization: "Bearer " + Cookies.get("token"),
            },
          }
        );
        setProfile(resp.data);
        // console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
  }, []);
  // console.log(magic.user.isLoggedIn())

  const showNavbar = () => {
    ReactGA.event({ category: "Navbar", action: "Navbar Clicked" });
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="nav-logo">
          <img src={logo} alt="SheRise" className="logo" />
        </div>
        <button className="nav-btn" title="Expand" onClick={showNavbar}>
          <FaBars className="fa-bars" />
        </button>
        <nav ref={navRef}>
          <li className="nav-links">
            <NavLink
              to="/"
              key={<LandingPage />}
              className={
                location.pathname === "/" ? "active-select" : "nav-main-links"
              }
            >
              <p>HOME</p>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              to="/scholarship"
              key={<Scholarship />}
              className={
                location.pathname === "/scholarship"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>SCHOLARSHIP</p>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              to="/developers"
              key={<Developers />}
              className={
                location.pathname === "/developers"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>DEVELOPERS</p>
            </NavLink>
          </li>
          <li className="nav-links">
            <NavLink
              to="/contact"
              key={<ContactUs />}
              className={
                location.pathname === "/contact"
                  ? "active-select"
                  : "nav-main-links"
              }
            >
              <p>CONTACT US</p>
            </NavLink>
          </li>
          {Cookies.get("token") ? (
            <NavLink to="/main/dashboard" key={<Dashboard />}>
              <span className="navbar-username">
                <div className="navbar-avatar"></div>
                <div className="navbar-profile-desc">
                  <div className="navbar-profile-name">{profile.firstname}</div>
                  <div className="navbar-profile-profession">
                    {profile.profession}
                  </div>
                </div>
              </span>
            </NavLink>
          ) : (
            <>
              <li className="nav-links">
                <NavLink to="/login" key={<Login />} className="nav-main-links">
                  <p>LOGIN</p>
                </NavLink>
              </li>
              <li className="nav-links">
                <NavLink
                  to="/register"
                  key={<Register />}
                  className="nav-main-links"
                >
                  <p>REGISTER</p>
                </NavLink>
              </li>
            </>
          )}
          <>
            <div className="back-menu"></div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
