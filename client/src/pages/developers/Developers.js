import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../../components/sidebar/Sidebar.css";
import "./Developers.css";
import { Helmet } from "react-helmet";
import { CommonPageHelmet, DynamicTitleHelmet } from "../../constants/SEO";

const Developers = () => {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // })
  return (
    <>
      <div className="developers">
        <Navbar />
        <Helmet>
          <title>{DynamicTitleHelmet.DevelopersPageTitle}</title>
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
        <div className="heading">
          <p>Meet Our Team</p>
          <p>Developers</p>
        </div>
        <section className="developer-profile">
          <div className="outer-card">
            <div className="image">
              <div className="avatar sayan-avatar"></div>
              <div className="avatar-overlay"></div>
              <div className="avatar-overlay2"></div>
            </div>
            <div className="description">
              <div className="name">
                <p> Sayan Maity</p>
                <p>Full-Stack Developer</p>
              </div>
              <div className="buttons">
                <a href="https://twitter.com/Sayancr777" target="_blank">
                  <p>Twitter</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/sayan-maity2003/"
                  target="_blank"
                >
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
          <div className="outer-card">
            <div className="image">
              <div className="avatar shrestha-avatar"></div>
              <div className="avatar-overlay"></div>
              <div className="avatar-overlay2"></div>
            </div>
            <div className="description">
              <div className="name">
                <p> Shreshtha Das</p>
                <p>UI/UX Designer</p>
              </div>
              <div className="buttons">
                <a href="https://twitter.com/classyvioletta" target="_blank">
                  <p>Twitter</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/shrestha-das-09365b260/"
                  target="_blank"
                >
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Developers;
