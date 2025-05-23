import React, { useState } from 'react';
import '../Styles/organisms.css';
import phoneImage from '../../assets/Images/Group 2.png';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from "../Atoms/AnimationSection"

const HeroSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (phoneNumber.trim()) {
      // ممكن تخزن الرقم في مكان تاني هنا (context or state)
      setPhoneNumber('');
      navigate('/booking');
    } else {
      alert('Please enter a phone number.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <section className="hero">
      <div className="hero-text">
      <AnimatedSection delay={0.2}>
        <p className="hero-subtitle">SUPERCHARGE YOUR PLANNING POWERS</p>
        <h1 className="hero-title">Travel to make<br />memories all<br />around the world</h1>
        <p className="hero-description">
          Stacks is a production-ready library of stackable content blocks built in React Native.
        </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
        <div className="hero-actions">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="arrow-btn" onClick={handleSubmit}>
              <FaArrowRight />
            </button>
          </div>
          <button className="book-btn" onClick={handleSubmit}>
            Book now
          </button>
        </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.4}>
      <div className="hero-image">
        <img src={phoneImage} alt="Phone with UI" />
      </div>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;
