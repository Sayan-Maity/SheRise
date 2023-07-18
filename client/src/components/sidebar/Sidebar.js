import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import {
  MdHeadsetMic
} from "react-icons/md";
import { SiPluscodes } from "react-icons/si";
import {
  IoPersonAddOutline,
  IoArrowBackOutline
} from "react-icons/io5";
import {  CiShop, CiBadgeDollar } from "react-icons/ci";
import { BiBot } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";

import { Outlet, useNavigate, NavLink } from "react-router-dom";
import "./Sidebar.css";

import Conference from "../../pages/conference/Conference";
import Dashboard from "../../pages/dashBoard/Dashboard";
import Hackathon from "../../pages/hackathon/Hackathon";
import HiringChallange from "../../pages/hiringChallenge/HiringChallange";
import Internship from "../../pages/internship/Internship";
import Workshop from "../../pages/workshop/Workshop";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../../utils/userContext";
import Cookies from "js-cookie";
import { magic } from "../../utils/magic";
import Axios from "axios";
import toast from "react-hot-toast";
import logo from "../../assets/images/dashboardLogo.svg"
import Assistant from "../../pages/assistant/Assistant";
import Livechat from "../../pages/livechat/Livechat";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  /* useLayoutEffect(() => {
    const didToken = Cookies.get("token");
    if (magic.user.isLoggedIn()) {
      Axios.get(process.env.REACT_APP_SERVER_URL + "/api/user/profile", {
        headers: {
          Authorization: "Bearer " + didToken,
        },
      })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user, setUser]);*/

  const logout = () => {
    magic.user.logout().then(() => {
      toast.success("Logout Successful");
      setUser({ user: null });
      Cookies.remove("token");
      navigate("/");
    });
  };

  const backbtn = () => {
    navigate("/")
  }

  return (
    <div className="container">
      <Toaster />

      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} >
            <NavLink to="/"><img src={logo} alt="Logo" className="logo"/></NavLink>
          </h1>
          <div
            style={{
              marginLeft: isOpen ? "45px" : "0px",
              transition: isOpen ? "all 0.5s" : "none",
            }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="middle_section">
          <NavLink to="/main/dashboard" key={<Dashboard />} className="link ">
            <div className="icon">
              <RxDashboard />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Dashboard</p>
            </div>
          </NavLink>

          <NavLink to="/main/conference" key={<Conference />} className="link ">
            <div className="icon">
              <MdHeadsetMic />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Conferences</p>
            </div>
          </NavLink>
          <NavLink to="/main/hackathon" key={<Hackathon />} className="link ">
            <div className="icon">
              <SiPluscodes />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Hackathons</p>
            </div>
          </NavLink>
          <NavLink
            to="/main/hiringChallange"
            key={<HiringChallange />}
            className="link "
          >
            <div className="icon">
              <IoPersonAddOutline />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Hiring</p>{" "}
            </div>
          </NavLink>
          <NavLink to="/main/internship" key={<Internship />} className="link ">
            <div className="icon">
              <CiBadgeDollar />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Internships</p>
            </div>
          </NavLink>

          <NavLink to="/main/workshop" key={<Workshop />} className="link ">
            <div className="icon">
              <CiShop />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Workshops</p>
            </div>
          </NavLink>
          <NavLink to="/main/assistant" key={<Assistant />} className="link ">
            <div className="icon">
              <BiBot />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Assistant</p>
            </div>
          </NavLink>
          <NavLink to="/main/livechat" key={<Livechat />} className="link ">
            <div className="icon">
              <BsChatDots />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Personalized </p><p>Mentor</p>
            </div>
          </NavLink>
        </div>
        <div className="bottom_section">

          <div className="link " onClick={()=> backbtn()}>
            <div className="icon">
              <IoArrowBackOutline  className="icon"/>
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>Back</p>
            </div>
          </div>
          <div className="link attach-bottom">
            <div className="icon" onClick={() => logout()}>
              <FiLogOut />
            </div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p onClick={() => logout()}>Log Out</p>
            </div>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
