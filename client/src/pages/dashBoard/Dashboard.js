import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import { UserContext } from "../../utils/userContext";
import Axios from "axios";
import Cookies from "js-cookie";
import ProfileCard from "../../components/profilecard/ProfileCard";
import BookmarkSection from "../../components/bookmarksection/BookmarkSection";
import xxxxx from "../../assets/png/dashboardAvatar.png"

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [profile, setProfile] = useState({});

  // Get time and Greet :
  const Greetings =() => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;

    if(hours >= 5 && hours < 12) greet = "Morning";
    else if(hours >= 12 && hours <= 17) greet = "Afternoon";
    else if((hours > 17 && hours <= 24) || ( hours < 5) ) greet = "Evening";

    return <span>Good {greet}</span>
  }

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

  return (
    <>
      <div className="dashboard">
        <div className="maindashboard">
          <div className="dashboard-column">

          {/* ========= Greeting Section ========= */}
            <div className="dashboard-welcome-div">
              <div className="left-desc">
                <p> <Greetings />, <span className="dashboard-username"> {profile.firstname}</span>!</p>
                <p>Welcome back to your <span>Dashboard</span> </p>
                <p>Explore all the opportunities section to keep yourself updated with the current job market.</p>
              <div className="gggg"></div>
              </div>
              <div className="right-image">
                <img src={xxxxx} alt="" className="hagu"/>
              </div>
            </div>
            
          {/* ========= Bookmark Section ========= */}
            <div className="dashboard-bookmark-section">
              <BookmarkSection bookmarks={profile.bookmarks} />
            </div>

          </div>
          {/* ========= Profile Card ========= */}
          <div className="dashboard-profile-section">
            <ProfileCard profile={profile} />
          </div>

        </div>
      </div>
    </>
  );
};

export default Dashboard;
