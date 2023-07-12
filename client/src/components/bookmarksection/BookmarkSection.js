import React from 'react'
import './BookmarkSection.css'
import {BsBookmarksFill} from "react-icons/bs";
import ConferenceCard from '../cards/conferencecard/ConferenceCard'
import HackathonCard from '../cards/hackathoncard/HackathonCard'
import HiringCard from '../cards/hiringcard/HiringCard'
import InternshipCard from '../cards/internship/InternshipCard'
import WorkshopCard from '../cards/workshopcard/WorkshopCard'

const BookmarkSection = ({bookmarks}) => {
  return (
    <>
      <div className="bookmarksection">
      <p className="all-bookmark-heading"> <BsBookmarksFill/> Your Bookmarks</p>
        {bookmarks?.length === 0 ? <p className="no-bookmark">No Bookmarks yet</p> :
          bookmarks?.map((bookmark) => {
            return bookmark.hackathon ? <HackathonCard hackathon={bookmark.hackathon} /> :
              bookmark.conference ? <ConferenceCard conference={bookmark.conference} /> :
                bookmark.workshop ? <WorkshopCard workshop={bookmark.workshop} /> :
                  bookmark.hiring ? <HiringCard hiring={bookmark.hiring} /> :
                    bookmark.internship ? <InternshipCard internship={bookmark.internship} /> : null
            
          })}
      </div>
    </>
  )
}

export default BookmarkSection
