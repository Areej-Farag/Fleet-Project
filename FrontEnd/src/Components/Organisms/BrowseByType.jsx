import React, { useRef } from 'react';
import '../Styles/BrowseByType.css';
import { FaArrowRight, FaArrowLeft, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import img1 from '../../assets/Images/prop1.png';
import img2 from '../../assets/Images/prop2.png';
import img3 from '../../assets/Images/prop3.png';
import img4 from '../../assets/Images/prop4.png';

const cards = [
  { img: img1, label: '20% OFF', title: 'Nature house', homes: '650,596' },
  { img: img2, label: '20% OFF', title: 'Modern Villa', homes: '1,220,360' },
  { img: img3, label: 'FROM $230', title: 'Lake View Cabin', homes: '312,150' },
  { img: img4, label: '20% OFF', title: 'Mountain Retreat', homes: '478,102' },
];

const BrowseByType = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

  return (
    <section className="browse-section">
      <div className="browse-header">
        <div>
          <h2>Browse by property type</h2>
          <p>Let’s go on an adventure</p>
        </div>
        <div className="browse-nav">
          <button onClick={() => scroll('left')}><FaArrowLeft /></button>
          <button onClick={() => scroll('right')}><FaArrowRight /></button>
        </div>
      </div>

      <div className="card-container" ref={scrollRef}>
        {cards.map((card, index) => (
          <div className="property-card" key={index}>
            <div className="card-image">
              <Link to={`/property/${slugify(card.title)}`}>
                <img src={card.img} alt={card.title} />
                <span className="card-label">{card.label}</span>
              </Link>
            </div>
            <div className="card-info">
              <h4>{card.title}</h4>
              <p><FaHome /> {card.homes}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="browse-nav mobile-nav">
        <button onClick={() => scroll('left')}><FaArrowLeft /></button>
        <button onClick={() => scroll('right')}><FaArrowRight /></button>
      </div>
    </section>
  );
};

export default BrowseByType;
