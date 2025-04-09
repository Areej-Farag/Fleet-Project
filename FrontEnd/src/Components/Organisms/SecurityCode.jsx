import React, { useState } from 'react'
import Typograph from '../Atoms/Typograph'
import '../Styles/organisms.css'
import DigitedInput from '../Atoms/DigitedInput'
import colors from '../Atoms/Colors'
import { RxCross2 } from "react-icons/rx";

export default function SecurityCode() {
    const [PhoneNumber , setPhoneNumber] = React.useState('+1 234 567 890');
  return (
    <div>
        <div className="security-overlay">
        <div className="security-container">
            <button className="close-button"><RxCross2 /></button>

            <Typograph variant="lead" color={colors.Neutrals[2]} bold={true}>
                Enter your security code
            </Typograph>
            <Typograph variant="small" color={colors.Neutrals[4]}>
            We texted your code to {PhoneNumber}
            </Typograph>
            <div className="digited-input-container">
                <DigitedInput />
            </div>

        </div>
        </div>
      
    </div>
  )
}
