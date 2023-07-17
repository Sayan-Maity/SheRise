import React, { useEffect, useState } from "react";
import Axios from "axios";

import "./Conference.css";
import ConferenceCard from "../../components/cards/conferencecard/ConferenceCard";
import ConferenceBanner from "../../assets/svg/type3.svg"
import ConferenceBanner2 from "../../assets/svg/conferenceBanner.svg"
import { Helmet } from "react-helmet";

const Conference = () => {
  const [conferences, setConferences] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await Axios.get(`${process.env.REACT_APP_SERVER_URL}/conferences`);
        setConferences(resp.data);
        // console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
  }, []);
  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredConferences = conferences.filter(conference => {
    return conference.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
  <>

    <div className="conference">
    <Helmet>
          <title>SheRise | Conferences</title>
          <meta
            name="description"
            content="SheRise's Conference Page. Here all the job listing related to the conference tags are dynamically listed down here. "
          />
          <meta
            name="keywords"
            content="Conference, Career, Tech, Opportunities, Job Listings"
          />
        </Helmet>
      <div className="conference-banner-section">
        <div className="left">
          <div className="left-image"><img src={ConferenceBanner2} alt={ConferenceBanner2} className="conference-banner-image" /></div>
          <div className="conference-heading"> <p> Conferences</p></div>
        </div>
        <div className="right">
          <div className="left-image"><img src={ConferenceBanner} alt={ConferenceBanner} className="conference-banner-image" /></div>

        </div>
      </div>
      <div className="searchbar-card-opportunity">
        <div className="searchbar-card">
          <div className='conference-searchbar'>
            <input type="text" placeholder="Search Conferences" onChange={handleSearch} />
            <div className="search-btn"><p>Search</p></div>
          </div>
          <section className="conferences-con">
            {filteredConferences.map((conference) => {
              return <ConferenceCard conference={conference} />;
            })}
          </section>
        </div>
        <div className="opportunity">
          <div className="opportunity-card">
            <div className="opportunity-heading">
              <p>Featured Opportunities</p>
            </div>
            <div className="opportunity-list">
              <div className="opportunity-list1">
                <div className="left opportunity-image1"></div>
                <div className="right">
                  <p>L'Oréal Brandstorm 2023 - PPO & PPI's up for grab</p>
                </div>
              </div>
              <div className="opportunity-list1">
                <div className="left opportunity-image2"></div>
                <div className="right">
                  <p>Women Code to Win 2023 - India | PPIs & ₹4,50,000 in prizes!</p>
                </div>
              </div>
              <div className="opportunity-list1">
                <div className="left opportunity-image3"></div>
                <div className="right">
                  <p>IIM Lucknow's Manfest-Varchasva 2022-23</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Conference;
