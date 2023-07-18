import React from 'react'
import SupportEngine from './SupportEngine'
import { BsLinkedin, BsTwitter, BsEnvelopeFill, BsPerson } from 'react-icons/bs';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { HiOutlineChatBubbleOvalLeftEllipsis } from 'react-icons/hi2';

import './Livechat.css'
import { Helmet } from 'react-helmet';


const Livechat = () => {
  return (
    <>
      <div className='livechat'>
      <Helmet>
        <title>SheRise | Mentor</title>
        <meta
          name="description"
          content="SheRise provides user with Personalized Mentor to help them with their career and do live one-on-one chat in real time.  "
        />
        <meta
          name="keywords"
          content="Personalized Mentor, Help, Support, Career, Tech, Opportunities, Job Listings"
        />
      </Helmet>
        <div className='livechat-inner'>

          <div className="mentor-group">
            <div className="mentor-groupchat-div">
              <div className="mentor-groupchat-heading"><p>Groupchat with Mentor :</p></div>
              <div className="mentor-groupchat-section">
                <div className="mentor-groupchat-card">
                  <div className="top">
                    <div className="mentor-groupchat-img groupchat-image1"></div>
                    <div className="mentor-groupchat-desc">
                      <div className="name"><p>Resume Making</p></div>
                      <div className="date"><p>Created 14/12/2021</p> </div>
                      <div className="admin"> <p>Admin: </p> <p>Anthony</p> </div>
                    </div>
                  </div>
                  <div className="groupchat-divider"></div>
                  <div className="bottom">
                    <div className="all-member">
                      <div className="total-member"><p>8 Members Going</p></div>
                      <div className="pending-member"><p>3 Pending</p></div>
                    </div>
                    <div className="group-members-images">
                      <div className="images">
                        <div className="image1 grp-image"></div>
                        <div className="image2 grp-image"></div>
                        <div className="image3 grp-image"></div>
                        <div className="image4 grp-image"><p>+5</p></div>
                      </div>
                      <div className="more-images"><p>+5 more...</p></div>
                    </div>
                  </div>
                </div>
                <div className="mentor-groupchat-card">
                  <div className="top">
                    <div className="mentor-groupchat-img groupchat-image2"></div>
                    <div className="mentor-groupchat-desc">
                      <div className="name"><p>DSA Discussion</p></div>
                      <div className="date"><p>Created 14/12/2019</p> </div>
                      <div className="admin"> <p>Admin: </p> <p>Joshua</p> </div>
                    </div>
                  </div>
                  <div className="groupchat-divider"></div>
                  <div className="bottom">
                    <div className="all-member">
                      <div className="total-member"><p>6 Members Going</p></div>
                      <div className="pending-member"><p>4 Pending</p></div>
                    </div>
                    <div className="group-members-images">
                      <div className="images">
                        <div className="image1 grp-image"></div>
                        <div className="image2 grp-image"></div>
                        <div className="image3 grp-image"></div>
                        <div className="image4 grp-image"><p>+3</p> </div>
                      </div>
                      <div className="more-images"><p>+3 more...</p></div>
                    </div>
                  </div>
                </div>
                <div className="mentor-groupchat-card">
                  <div className="top">
                    <div className="mentor-groupchat-img groupchat-image3"></div>
                    <div className="mentor-groupchat-desc">
                      <div className="name"><p>HR Discussion</p></div>
                      <div className="date"><p>Created 14/12/2019</p> </div>
                      <div className="admin"> <p>Admin: </p> <p>Scarlette</p> </div>
                    </div>
                  </div>
                  <div className="groupchat-divider"></div>
                  <div className="bottom">
                    <div className="all-member">
                      <div className="total-member"><p>8 Members Going</p></div>
                      <div className="pending-member"><p>2 Pending</p></div>
                    </div>
                    <div className="group-members-images">
                      <div className="images">
                        <div className="image1 grp-image"></div>
                        <div className="image2 grp-image"></div>
                        <div className="image3 grp-image"></div>
                        <div className="image4 grp-image"><p>+5</p> </div>
                      </div>
                      <div className="more-images"><p>+5 more...</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="individual-mentor-div">
              <div className="individual-mentor-heading"><p>Connect Individual Mentors :</p></div>
              <div className="searchbar-individual-mentors">
                <input type="text" placeholder='Search Mentors ...'  />
                <div className="search-mentor-btn"><p>Search</p></div>
              </div>
              <div className="individual-mentor-section">
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor1"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Anthony Moore</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Google</p> </div>
                      <div className="profession"><BsPerson/> <p>Hiring Manager</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor2"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Emma Taylor</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Appwrite</p> </div>
                      <div className="profession"><BsPerson/> <p>Recruiter</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor3"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Brian Thomas</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Microsoft</p> </div>
                      <div className="profession"><BsPerson/> <p>Recruiter</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor4"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Melissa Garcia</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Sharechat</p> </div>
                      <div className="profession"><BsPerson/> <p>Hiring Manager</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor5"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Brittany Thompson</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Amazon</p> </div>
                      <div className="profession"><BsPerson/> <p>Hiring Manager</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor6"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Lauren Martinez</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Attlasian</p> </div>
                      <div className="profession"><BsPerson/> <p>Recruiter</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor7"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Samantha White</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Github</p> </div>
                      <div className="profession"><BsPerson/> <p>Recruiter</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor8"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Carlos Martin</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Google</p> </div>
                      <div className="profession"><BsPerson/> <p>Hiring Manager</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>
                <div className="individual-mentor-card">
                  <div className="top">
                    <div className="individual-mentor-img indiv-mentor9"></div>
                    <div className="individual-mentor-desc">
                      <div className="name"><p>Adam Green</p></div>
                      <div className="company"><HiOutlineBuildingOffice2/> <p>Airbnb</p> </div>
                      <div className="profession"><BsPerson/> <p>Recruiter</p> </div>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="linkedin"><a href="/"><BsLinkedin className='vvv'/></a></div>
                    <div className="twitter"><a href="/"><BsTwitter/></a></div>
                    <div className="mail"><a href="/"><BsEnvelopeFill/></a></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="live-people-div">
            <div className="live-people-card">
              <div className="live-people">
                <div className="live-people-row">
                  <div className="live-people-image live-people1"></div>
                  <div className="live-people-desc">
                    <div className="name"><p>Emma Taylor</p></div>
                    <div className="place"> <p>USA, California</p> </div>
                </div>
                </div>
                <div className="live-people-chat-icon"><HiOutlineChatBubbleOvalLeftEllipsis/></div>
              </div>
            </div>
            <div className="live-people-card">
              <div className="live-people">
                <div className="live-people-row">
                  <div className="live-people-image live-people2"></div>
                  <div className="live-people-desc">
                    <div className="name"><p>Brian Thomas</p></div>
                    <div className="place"> <p>Canada, Quebec</p> </div>
                  </div>
                </div>
                <div className="live-people-chat-icon"><HiOutlineChatBubbleOvalLeftEllipsis/></div>
              </div>
            </div>
            <div className="live-people-card">
              <div className="live-people">
                <div className="live-people-row">
                  <div className="live-people-image live-people3"></div>
                  <div className="live-people-desc">
                    <div className="name"><p>Samantha White</p></div>
                    <div className="place"> <p>USA, California</p> </div>
                  </div>
                </div>
                <div className="live-people-chat-icon"><HiOutlineChatBubbleOvalLeftEllipsis/></div>
              </div>
            </div>
            <div className="live-people-card">
              <div className="live-people">
                <div className="live-people-row">
                  <div className="live-people-image live-people4"></div>
                  <div className="live-people-desc">
                    <div className="name"><p>Adam Green</p></div>
                    <div className="place"> <p>USA, NYC</p> </div>
                  </div>
                </div>
                <div className="live-people-chat-icon"><HiOutlineChatBubbleOvalLeftEllipsis/></div>
              </div>
            </div>
            
          </div>




          <SupportEngine />
        </div>
      </div>
    </>
  )
}

export default Livechat
