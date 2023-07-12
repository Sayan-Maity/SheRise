import React, { useState } from 'react';
import './HiringCard.css'
import Axios from 'axios'
import { BsBookmark, BsBookmarkFill, BsCalendar2Date }from "react-icons/bs";
import { IoTimeOutline }from "react-icons/io5";
import { GoLocation }from "react-icons/go";

import Cookies from 'js-cookie'

const HiringCard = ({ hiring }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);


    async function bookmark() {
        try {
            let resp = await Axios.post(`${process.env.REACT_APP_SERVER_URL}/user/bookmark`, {hiring},{
                headers: {
                    Authorization: "Bearer " + Cookies.get("token")
                }
            })
            if(resp.status === 200){
                // console.log(resp.data)
                setIsBookmarked(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='hiring-card'>
            <div className="top">
                <div className="hiring-position"><p>{hiring.position}</p></div>
                <div className="hiring-name"><p>{hiring.name}</p></div>
                <div className="hiring-location"><GoLocation className='hiring-icon'/> <p>{hiring.location}</p></div>
                <div className="hiring-salary">Salary : <p> {hiring.salary}</p></div>
                <div className="hiring-qualification">
                    <p>- {hiring.required_qualifications_1}</p>
                    <p>- {hiring.required_qualifications_2}</p>
                    <p>- {hiring.required_qualifications_3}</p>
                    <p>- {hiring.required_qualifications_4}</p>
                </div>
            </div>
            <div className="bottom">
                <div className="hiring-deadline"> Register by : <p>{hiring.application_deadline}</p></div>
                <div className="hiring-btn">
                    <div className="hiring-bookmark " onClick={() => bookmark()}>
                        <div>
                        {' '}
                        {isBookmarked ? (
                            <>
                            <BsBookmarkFill className="hiring-icon bookmark-icon" />{' '}
                            </>
                        ) : (
                            <>
                            <BsBookmark className="hiring-icon bookmark-icon" />{' '}
                            </>
                        )}{' '}
                        </div>
                        <p>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</p>
                    </div>
                    <div className="appy-btn">
                        <a href="/" target="_blank">
                        Apply
                        </a>{' '}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HiringCard



