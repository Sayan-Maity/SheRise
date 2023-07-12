import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './Hackathon.css';
import { SiPluscodes } from 'react-icons/si';
import HackathonBanner from "../../assets/svg/type3.svg"
import HackathonBanner2 from "../../assets/svg/hackathonBanner3.svg"
import HackathonCard from '../../components/cards/hackathoncard/HackathonCard';

const Hackathon = () => {
  const [hackathons, setHackathons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await Axios.get(`${process.env.REACT_APP_SERVER_URL}/hackathons` );
        setHackathons(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredHackathons = hackathons.filter(hackathon => {
    return hackathon.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="hackathon">
      <div className="hackathon-banner-section">
        <div className="left">
          <div className="left-image"><img src={HackathonBanner2} alt={HackathonBanner2} className="hackathon-banner-image" /></div>
          <div className="hackathon-heading"> <p> Hackathons</p></div>
        </div>
        <div className="right">
          <div className="left-image"><img src={HackathonBanner} alt={HackathonBanner} className="hackathon-banner-image" /></div>

        </div>
      </div>
      <div className="searchbar-card-opportunity">
        <div className="searchbar-card">
          <div className='hackathon-searchbar'>
            <input type="text" placeholder="Search Hackathons" onChange={handleSearch} />
            <div className="search-btn"><p>Search</p></div>
          </div>
          <section className="hackathons-con">
            {filteredHackathons.map((hackathon) => {
              return <HackathonCard hackathon={hackathon} />;
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
  );
};
export default Hackathon;
