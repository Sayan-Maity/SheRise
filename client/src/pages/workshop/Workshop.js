import React, { useEffect, useState } from "react";
import Axios from "axios";
import { CiShop } from "react-icons/ci";

import "./Workshop.css";
import WorkshopCard from "../../components/cards/workshopcard/WorkshopCard";
import WorkshopBanner from "../../assets/svg/type3.svg"
import WorkshopBanner2 from "../../assets/svg/workshopBanner2.svg"

const Workshop = () => {
  const [workshops, setWorkshops] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await Axios.get( `${process.env.REACT_APP_SERVER_URL}/workshops`)
        setWorkshops(resp.data);
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

  const filteredWorkshops = workshops.filter(workshop => {
    return workshop.title.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <>
            <div className="workshop">
        <div className="workshop-banner-section">
          <div className="left">
            <div className="left-image"><img src={WorkshopBanner2} alt={WorkshopBanner2} className="workshop-banner-image" /></div>
            <div className="workshop-heading"> <p> Workshops</p></div>
          </div>
          <div className="right">
            <div className="left-image"><img src={WorkshopBanner} alt={WorkshopBanner} className="workshop-banner-image" /></div>

          </div>
        </div>
        <div className="searchbar-card-opportunity">
          <div className="searchbar-card">
            <div className='workshop-searchbar'>
              <input type="text" placeholder="Search Workshops" onChange={handleSearch} />
              <div className="search-btn"><p>Search</p></div>
            </div>
            <section className="workshops-con">
              {filteredWorkshops.map((workshop) => {
                return <WorkshopCard workshop={workshop} />;
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

export default Workshop;
