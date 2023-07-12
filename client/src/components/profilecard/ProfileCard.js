import React from 'react'
import './ProfileCard.css'
import { BsGithub, BsTwitter, BsLinkedin, BsFillPatchCheckFill, BsTools }from "react-icons/bs";
import { IoLocationOutline }from "react-icons/io5";

const ProfileCard = ({profile}) => {
  
  const REACT_APP_LINKEDIN_URL = ' https://www.linkedin.com/in';
  const REACT_APP_GITHUB_URL = ' https://github.com';
  // console.log(profile.linkedin)
  return (
    <>
        <div className="profilecard">
            <div className="upper-profile"></div>
            <div className="user-profile-div">
                <div className="user-main-avatar3">
                  <div className="user-main-avatar2">
                    <div className="user-main-avatar"></div>
                  </div>
                </div>
            </div>
            <div className="lower-profile">
              <div className="top">
                <div className="user-name"><BsFillPatchCheckFill className='hhh'/><p>{profile.firstname}</p> <p>{profile.lastname}</p> </div>
                <div className="user-location-profession">
                  <div className="user-location"><IoLocationOutline className='user-location-icon'/> <p>{profile.country}</p></div>
                  <div className="user-profession"><BsTools className='user-profession-icon'/><p>{profile.profession}</p></div>
                </div>
              </div>
              <div className="user-bio"><p>{profile.bio}</p></div>
              <div className="user-email"><p>{profile.email}</p></div>
              <div className="user-profile-social">
                <div className="user-profile-github"><a href={`${REACT_APP_GITHUB_URL}/${profile.github}`} target="_blank">Github </a></div>
                <div className="user-profile-linkedin"><a href={`${REACT_APP_LINKEDIN_URL}/${profile.linkedin}`} target="_blank">Linkedin </a></div>
              </div>
            </div>
        </div>






    
        {/* <p>{profile?.name}</p>
        {profile?.email}
        <p>{profile?.university}</p>
        <p>{profile?.stream}</p>
        <p>{profile?.year}</p>
        <p>{profile?.country}</p>
        <p>{profile?.bio}</p>
        <p>{profile?.profession}</p> */}


    </>
  )
}


export default ProfileCard
