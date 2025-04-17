import React from 'react'
import TripComments from '../Organisms/TripComments'
import HostCard from '../Organisms/HostCard'
import "../Styles/templates.css"

export default function TripCommentsSec({trip} ) {
  return (
    <div className='trips-comments-section'>
        <div className="template-host-container">
            <HostCard />
        </div>
        <div className="template-comments-container">
            <TripComments tripName={trip.name} tripReviews={trip.reviews}/>
        </div>
      
    </div>
  )
}
