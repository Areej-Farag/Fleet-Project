import React from 'react'
import TripComments from '../Organisms/TripComments'
import HostCard from '../Organisms/HostCard'
import "../Styles/templates.css"
import AnimatedSection from "../Atoms/AnimationSection";

export default function TripCommentsSec({trip} ) {
  return (
    <AnimatedSection delay={0.2}>
    <div className='trips-comments-section'>
        <div className="template-host-container">
            <HostCard />
        </div>
        <div className="template-comments-container">
            <TripComments tripName={trip.name} tripReviews={trip.reviews}/>
        </div>
      
    </div>
  </AnimatedSection>
  )
}
