import React from 'react'
import PaymentConfirmationDetailes from '../Organisms/PaymentConfirmationDetailes'
import PaymentForm from '../Organisms/PaymentForm'
import '../Styles/templates.css'

export default function PaymentTemplate( {trip} ) {
  return (
    <div className="payment-template-container d-flex">
     <div className='payment-form-container'><PaymentForm /></div>
     <div className='payment-confirmation-container'><PaymentConfirmationDetailes /></div>
    </div>
  )
}
