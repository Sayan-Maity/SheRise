import React, { useEffect } from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import '../../components/sidebar/Sidebar.css'
import './Developers.css'
import ReactGA from 'react-ga4'

const Developers = () => {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // })
  return (
    <>
      <div className='developers'>
        <Navbar/>
        <div className="heading">
          <p>Meet Our Team</p>
          <p>Developers</p>
          </div>
        <section className='developer-profile'>
          
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
                <a href="https://twitter.com/Sayancr777" target="_blank"><p>Twitter</p></a>
                <a href="https://www.linkedin.com/in/sayan-maity2003/" target="_blank"><p>Linkedin</p></a>
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
                <a href="https://twitter.com/classyvioletta" target="_blank"><p>Twitter</p></a>
                <a href="https://www.linkedin.com/in/shrestha-das-09365b260/" target="_blank"><p>Linkedin</p></a>
              </div>
            </div>
          </div>

        </section>
        <Footer/>
      </div>
    </>
  )
}

export default Developers
