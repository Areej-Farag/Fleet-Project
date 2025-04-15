import React from 'react';
import InputField from '../Atoms/InputField';
import Button from '../Atoms/Button';
import { FaArrowRight } from 'react-icons/fa';
import '../Styles/NewsLetterForm.css';

const NewsletterForm = () => {
  const handleSubscribe = () => {
    alert('Thank you for subscribing!');
  };

  return (
    <div className="newsletter-form">
      <h4 className="newsletter-title">JOIN OUR COMMUNITY 🔥</h4>
      <div className="newsletter-input-wrapper">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="newsletter-btn" onClick={handleSubscribe}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default NewsletterForm;
