import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Internship.css";
import { CiBadgeDollar } from "react-icons/ci";
import InternshipCard from "../../components/cards/internship/InternshipCard";
import InternshipBanner from "../../assets/svg/type3.svg";
import InternshipBanner2 from "../../assets/svg/internBanner.svg";
import { Helmet } from "react-helmet";
import { CommonPageHelmet, DynamicTitleHelmet } from "../../constants/SEO";

const Internship = () => {
  const [internships, setInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function call() {
      try {
        let resp = await Axios.get(
          process.env.REACT_APP_SERVER_URL + "/internships"
        );
        setInternships(resp.data);
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

  const filteredInternships = internships.filter((internship) => {
    return internship.position.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="internship">
        <Helmet>
          <title>{DynamicTitleHelmet.InternshipPageTitle}</title>
          <meta name="description" content={CommonPageHelmet.description} />
          <meta name="keywords" content={CommonPageHelmet.keywords} />
          <meta property="og:title" content={CommonPageHelmet.ogTitle} />
          <meta
            property="og:description"
            content={CommonPageHelmet.ogDescription}
          />
          <meta property="og:image" content={CommonPageHelmet.ogImage} />
          <meta property="og:url" content={CommonPageHelmet.ogURL} />
          <meta property="og:type" content={CommonPageHelmet.ogType} />
          <meta property="og:site_name" content={CommonPageHelmet.ogSiteName} />
          <meta property="og:locale" content={CommonPageHelmet.ogLocale} />
        </Helmet>
        <div className="internship-banner-section">
          <div className="left">
            <div className="left-image">
              <img
                src={InternshipBanner2}
                alt={InternshipBanner2}
                className="internship-banner-image"
              />
            </div>
            <div className="internship-heading">
              {" "}
              <p> Internships</p>
            </div>
          </div>
          <div className="right">
            <div className="left-image">
              <img
                src={InternshipBanner}
                alt={InternshipBanner}
                className="internship-banner-image"
              />
            </div>
          </div>
        </div>
        <div className="searchbar-card-opportunity">
          <div className="searchbar-card">
            <div className="internship-searchbar">
              <input
                type="text"
                placeholder="Search Internships"
                onChange={handleSearch}
              />
              <div className="search-btn">
                <p>Search</p>
              </div>
            </div>
            <section className="internships-con">
              {filteredInternships.map((internship) => {
                return <InternshipCard internship={internship} />;
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

export default Internship;
