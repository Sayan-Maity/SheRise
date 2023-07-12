import React, { useState } from 'react'
import './InternshipCard.css'
import Axios from 'axios'
import { GoLocation }from "react-icons/go";
import { BsBookmark, BsBookmarkFill, BsCalendar2Date }from "react-icons/bs";

import Cookies from 'js-cookie'

const InternshipCard = ({ internship }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);


    async function bookmark() {
        try {
            let resp = await Axios.post(`$(process.env.REACT_APP_SERVER_URL)/user/bookmark`, {internship},{
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
        <div className='internship-card'>
            <div className="top">
                <div className="internship-position"><p>{internship.position}</p></div>
                <div className="internship-name"><p>{internship.company}</p></div>
                <div className="internship-location"><GoLocation className='hiring-icon'/> <p>{internship.location}</p></div>
                <div className="internship-start"><BsCalendar2Date className='hiring-icon'/>  Start Date : <p>{internship.start_date}</p></div>
                <div className="internship-end"><BsCalendar2Date className='hiring-icon'/>  End Date : <p>{internship.end_date}</p></div>
            </div>
            <div className="middle">
                <div className="internship-responsibility">
                    <p>Day to Day Responsibilities : </p>
                    <p>{internship.responsibilities}</p>
                </div>
                <div className="internship-qualification">
                    <p>Required Qualifications : </p>
                    <p>{internship.qualifications}</p>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="internship-compensation"><p>{internship.compensation}</p></div>
                    <div className="internship-working"><p>{internship.working}</p></div>
                </div>
                <div className="right">
                <div className="internship-btn">
                    <div className="internship-bookmark " onClick={() => bookmark()}>
                        <div>
                        {' '}
                        {isBookmarked ? (
                            <>
                            <BsBookmarkFill className="internship-icon bookmark-icon" />{' '}
                            </>
                        ) : (
                            <>
                            <BsBookmark className="internship-icon bookmark-icon" />{' '}
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
        </div>
    )
}

export default InternshipCard