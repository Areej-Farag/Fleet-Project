import React from 'react';
import '../Styles/organisms.css';
import Typograph from '../Atoms/Typograph';
import { FaCalendarAlt, FaCheckCircle, FaDollarSign } from 'react-icons/fa';
import AnimatedSection from "../Atoms/AnimationSection"

const steps = [
  {
    icon: <FaCalendarAlt />,
    title: 'Book & relax',
    description: 'We realize ideas from simple to complex, everything becomes easy to use.',
    color: '#4CAF50',
  },
  {
    icon: <FaCheckCircle />,
    title: 'Smart checklist',
    description: 'We realize ideas from simple to complex, everything becomes easy to use.',
    color: '#3F51B5',
  },
  {
    icon: <FaDollarSign />,
    title: 'Save more',
    description: 'We realize ideas from simple to complex, everything becomes easy to use.',
    color: '#03A9F4',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <AnimatedSection delay={0.1}>
      <div>
      <Typograph variant="h2" className="how-title">How it work</Typograph>
      <Typograph variant="subtitle" className="how-subtitle">Keep calm & travel on</Typograph>
      </div>
      </AnimatedSection>

      <div className="steps-container">
        {steps.map((step, index) => (
           <AnimatedSection delay={0.2 + index * 0.2}>
          <div className="step-card" key={index} style={{ animationDelay: `${index * 0.3}s` }}>
            <div className="card-icon-wrapper">
              <div className="card-icon" style={{ backgroundColor: step.color }}>
                {step.icon}
              </div>
            </div>
            <Typograph variant="h2" className="step-title">{step.title}</Typograph>
            <Typograph variant="body" className="step-description">{step.description}</Typograph>
          </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="dotted-line"></div>

      {/* Decorative floating shapes */}
      
      <AnimatedSection delay={0.2}>
        <div className="floating purple"></div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
      <div className="floating yellow"></div>
      </AnimatedSection>
      <AnimatedSection delay={0.4}>
      <div className="floating red"></div>
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
      <div className="floating blue"></div>
      </AnimatedSection>
    </section>
  );
};

export default HowItWorksSection;
