import React, { useEffect } from 'react'
import PaymentTemplate from '../Templates/PaymentTemplate'
import useTripsStore from '../../Reducers/TripsStore'
import { useParams } from 'react-router-dom';
export default function Payment() {
  const {bookingId} = useParams();
  const {trip , fetchTripById} = useTripsStore();
  useEffect(() => {
    fetchTripById(bookingId);
  }, [bookingId, fetchTripById]);
  return (
    <div>
      <PaymentTemplate trip={trip}/>
    </div>
  )
}
