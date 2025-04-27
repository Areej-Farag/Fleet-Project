import React from 'react'
import SignUpForm from '../Organisms/SignUpForm'
import SignInForm from '../Organisms/SignInForm'
import UserConfirmation from '../Organisms/UserConfirmation'
import SecurityCode from '../Organisms/SecurityCode'
import { useAuthModal } from '../../Context/AuthModalContext'
import '../Styles/templates.css'
import { useState } from 'react'
export default function AuthModal() {
    const { authType, isModalOpen } = useAuthModal();
  
    if (!isModalOpen) return null; // لو مش مفتوح، متعرضش حاجة
  
    switch (authType) {
        case 'signup':
          return <SignUpForm />;
        case 'signin':
          return <SignInForm />;
        case 'confirm':
          return <UserConfirmation />;
        case 'securityCode':
          return <SecurityCode />;
        default:
          return null;
      }
  }