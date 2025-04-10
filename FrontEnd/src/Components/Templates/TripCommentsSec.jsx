import React from 'react'
import TripComments from '../Organisms/TripComments'
import HostCard from '../Organisms/HostCard'
import "../Styles/templates.css"

export default function TripCommentsSec() {
  return (
    <div className='trips-comments-section'>
        <div className="template-host-container">
            <HostCard/>
        </div>
        <div className="template-comments-container">
            <TripComments/>
        </div>
      
    </div>
  )
}
