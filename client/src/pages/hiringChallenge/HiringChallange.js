import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./HiringChallange.css";
import HiringCard from "../../components/cards/hiringcard/HiringCard";
import HiringBanner from "../../assets/svg/type3.svg";
import HiringBanner2 from "../../assets/svg/hiringBanner.svg";
import { Helmet } from "react-helmet";
const HiringChallange = () => {
  const [hirings, setHirings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await Axios.get(
          `${process.env.REACT_APP_SERVER_URL}/hiring`
        );
        setHirings(resp.data);
        // console.log(resp.data);
      } catch (err) {
        console.log(err);
      }
    }
    call();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredHirings = hirings.filter((hiring) => {
    return hiring.position.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="hiring">
        <Helmet>
          <title>SheRise | Hiring</title>
          <meta
            name="description"
            content="SheRise's Hiring Page. Here all the job listing related to the Hiring tags are dynamically listed down here. "
          />
          <meta
            name="keywords"
            content="Hiring, Career, Tech, Opportunities, Job Listings"
          />
        </Helmet>
        <div className="hiring-banner-section">
          <div className="left">
            <div className="left-image">
              <img
                src={HiringBanner2}
                alt={HiringBanner2}
                className="hiring-banner-image"
              />
            </div>
            <div className="hiring-heading">
              {" "}
              <p> Hirings</p>
            </div>
          </div>
          <div className="right">
            <div className="left-image">
              <img
                src={HiringBanner}
                alt={HiringBanner}
                className="hiring-banner-image"
              />
            </div>
          </div>
        </div>
        <div className="searchbar-card-opportunity">
          <div className="searchbar-card">
            <div className="hiring-searchbar">
              <input
                type="text"
                placeholder="Search Hirings"
                onChange={handleSearch}
              />
              <div className="search-btn">
                <p>Search</p>
              </div>
            </div>
            <section className="hirings-con">
              {filteredHirings.map((hiring) => {
                return <HiringCard hiring={hiring} />;
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
                    <p>
                      Women Code to Win 2023 - India | PPIs & ₹4,50,000 in
                      prizes!
                    </p>
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

export default HiringChallange;
