import React, { useState } from 'react'
import './ConferenceCard.css'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { BsBookmark, BsBookmarkFill, BsCalendar2Date }from "react-icons/bs";
import { GoLocation }from "react-icons/go";

const ConferenceCard = ({ conference }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);


    async function bookmark() {
        try {
            let resp = await Axios.post(`${process.env.REACT_APP_SERVER_URL}/user/bookmark`, {conference},{
                headers: {
                    Authorization: "Bearer " + Cookies.get("token")
                }
            })
            if(resp.status === 200){
            //     console.log(resp.data)
                setIsBookmarked(true);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='conference-card'>

            {(conference)? (
                <>
                    <div className="top">
                        <div className="conference-title">
                            <div className="conference-name"> <p>{conference.name}</p></div>
                            <div className="conference-location"><GoLocation className='conference-icon'/> <p>{conference.location}</p></div>
                            <div className="conference-date"> <BsCalendar2Date className='conference-icon'/><p>{conference.dates}</p></div>
                        </div>
                        <div className="conference-description"><p>{conference.description}</p></div>
                    </div>
                    <div className="bottom">
                        <div className="conference-fee">Registration Fee : <p> {conference.registration_fee}</p> </div>
                        <div className="conference-btn">
                            <div className="conference-bookmark " onClick={() => bookmark()}>
                                <div>
                                {' '}
                                {isBookmarked ? (
                                    <>
                                    <BsBookmarkFill className="conference-icon bookmark-icon" />{' '}
                                    </>
                                ) : (
                                    <>
                                    <BsBookmark className="conference-icon bookmark-icon" />{' '}
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

                </>

            ) : (
                <p className='loading'>Loading...</p>
            )}

        </div>
    )
}

export default ConferenceCard