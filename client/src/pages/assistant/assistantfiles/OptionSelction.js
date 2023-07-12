import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../utils/userContext';
import Axios from 'axios';
import Cookies from 'js-cookie';
import RobotAI from '../../../assets/svg/robotAI.svg';

export default function OptionSelection({ arrayItems, selectOption }) {
  const [user, setUser] = useContext(UserContext);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function call() {
      try {
        let resp = await Axios.get(
          process.env.REACT_APP_SERVER_URL + '/dashboard',
          {
            headers: {
              Authorization: 'Bearer ' + Cookies.get('token'),
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
      <div className="option-select-div">
        <div className="option-select-inner">
          <div className="option-select-left">
            <div className="heading">
              <p>Hello {profile.firstname},</p>
              <p>am your AI Assistant</p>
            </div>
            <div className="heading-desc">
              <p>
                My name is <span>Atom</span> and I am build with the help of{' '}
                <a href="https://beta.openai.com/docs/" target="_blank" rel='noreferrer' >openai api</a> . I am a artificial intelligence bot
                who can provide you with a diverse amount of knowledge everytime
                you would ask which you can't even think of.
              </p>
              <p>Below is given 2 options, Select any and enjoy !</p>
            </div>
            <div className="grid-outer">
              <div className="grid-main">
                {arrayItems.map((item) => {
                  return (
                    <div
                      className="grid-child"
                      onClick={() => selectOption(item.option)}
                    >
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="option-select-right">
            <img src={RobotAI} alt={RobotAI} />
          </div>
        </div>
      </div>
    </>
  );
}
