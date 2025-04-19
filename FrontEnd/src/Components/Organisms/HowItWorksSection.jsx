// src/Sections/HowItWorksSection.jsx

import React from 'react';
import { FaCalendarCheck, FaClipboardList, FaDollarSign } from 'react-icons/fa';
import Typograph from '../Atoms/Typograph';
import Icon from '../Atoms/Icons'; // حسب اسم الملف، صحح المسار لو مختلف
import Colour from '../Atoms/Colors'; // لو عندك ألوان محددة تقدر تستخدمها من هنا
import '../Styles/organisms.css'; // CSS الخاص بالسكشن

const steps = [
  {
    icon: <FaCalendarCheck />,
    title: 'Book & relax',
    colorClass: 'green-bg',
    description: 'We realize ideas from simple to complex, everything becomes easy to use.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Smart checklist',
    colorClass: 'blue-bg',
    description: 'We realize ideas from simple to complex, everything becomes easy to use.',
  },
  {
    icon: <FaDollarSign />,
    title: 'Save more',
    colorClass: 'purple-bg',
    description: 'We realize ideas from simple to complex, everything becomes easy to use.',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="how-it-works">
      <Typograph variant="h2">How it works</Typograph>
      <Typograph variant="p">Keep calm & travel on</Typograph>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className={`icon ${step.colorClass}`}>
              <Icon>{step.icon}</Icon>
            </div>
            <Typograph variant="h3">{step.title}</Typograph>
            <Typograph variant="p">{step.description}</Typograph>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
