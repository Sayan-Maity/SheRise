import React, { useState } from 'react';
import Axios from 'axios';
import { IoPersonAddOutline } from 'react-icons/io5';
import { BsBookmark, BsBookmarkFill, BsCalendar2Date } from 'react-icons/bs';

import Cookies from 'js-cookie';
import './HackathonCard.css';

const HackathonCard = ({ hackathon }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  async function bookmark() {
    try {
      let resp = await Axios.post(
        `${process.env.REACT_APP_SERVER_URL}/user/bookmark`,
        { hackathon },
        {
          headers: {
            Authorization: 'Bearer ' + Cookies.get('token'),
          },
        }
      );
      if (resp.status === 200) {
        // console.log(resp.data)
        setIsBookmarked(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="hackathon-card">
      <div className="top">
        <div className="hackathon-name">
          <p>{hackathon.name}</p>
        </div>
        <div className="hackathon-url">
          <p>Go to : </p> <a href="{hackathon.url}">{hackathon.url}</a>{' '}
        </div>
        <div className="hackathon-start">
          <BsCalendar2Date className="hackathon-icon" /> Start Date :{' '}
          <p>{hackathon.startDate}</p>{' '}
        </div>
        <div className="hackathon-end">
          <BsCalendar2Date className="hackathon-icon" /> End Date :{' '}
          <p>{hackathon.endDate}</p>{' '}
        </div>
      </div>
      <div className="bottom">
        <div className="hackathon-register">
          <IoPersonAddOutline className="hackathon-icon" />{' '}
          <p>{hackathon.participants} </p>registered
        </div>
        <div className="hackathon-btn">
          <div className="hackathon-bookmark " onClick={() => bookmark()}>
            <div>
              {' '}
              {isBookmarked ? (
                <>
                  <BsBookmarkFill className="hackathon-icon bookmark-icon" />{' '}
                </>
              ) : (
                <>
                  <BsBookmark className="hackathon-icon bookmark-icon" />{' '}
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
  );
};

export default HackathonCard;
