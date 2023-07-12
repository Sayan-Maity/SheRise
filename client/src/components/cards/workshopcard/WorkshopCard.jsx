import React, { useState } from 'react'
import './WorkshopCard.css'
import Axios from 'axios'
import { BsBookmark, BsCalendar2Date, BsClock, BsAward, BsBookmarkFill }from "react-icons/bs";
import { GoLocation }from "react-icons/go";

import Cookies from 'js-cookie'

const WorkshopCard = ({ workshop }) => {
    const [isBookmarked, setIsBookmarked] = useState(false);


    async function bookmark() {
        try {
            let resp = await Axios.post(`${process.env.REACT_APP_SERVER_URL}/user/bookmark`, {workshop},{
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
        <div className='workshop-card'>
            <div className="top">
                <div className="workshop-name"><p>{workshop.title}</p></div>
                <div className="workshop-location"><GoLocation className='workshop-icon'/> <p>{workshop.location}</p></div>
                <div className="workshop-date"><BsCalendar2Date className='workshop-icon'/> Date : <p>{workshop.date}</p></div>
                <div className="workshop-time"><BsClock className='workshop-icon'/> Time : <p>{workshop.time}</p></div>
            </div>
            <div className="middle">
                <p className='workshop-description'>Description : </p>
                <p className='workshop-description'>{workshop.description}</p>
            </div>
            <div className="bottom">
                <div className="workshop-price">Price : <p>{workshop.price}</p></div>
                <div className="workshop-btn">
                    <div className="workshop-bookmark " onClick={() => bookmark()}>
                        <div>
                        {' '}
                        {isBookmarked ? (
                            <>
                            <BsBookmarkFill className="workshop-icon bookmark-icon" />{' '}
                            </>
                        ) : (
                            <>
                            <BsBookmark className="workshop-icon bookmark-icon" />{' '}
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

export default WorkshopCard