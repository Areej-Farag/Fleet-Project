import React, { useState , useContext} from 'react';
import Typography from '../Atoms/Typograph';
import Button from '../Atoms/Button';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import seaImg from '../../assets/Images/sea.png';
import campingImg from '../../assets/Images/camping.png';
import snowImg from '../../assets/Images/snow.png';
import '../Styles/organisms.css';
import { ColorContext } from '../../Context/ColorContext';
const cards = [
  {
    title: 'Luxury resort at the sea',
    image: seaImg,
    places: '9,326 PLACES',
  },
  {
    title: 'Camping amidst the wild',
    image: campingImg,
    places: '9,326 PLACES',
  },
  {
    title: 'Snowy mountain escape',
    image: snowImg,
    places: '9,326 PLACES',
  },
];

const AdventureSection = () => {
  const colors = useContext(ColorContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="adventure-section">
      <Typography type="h2" className="adventure-title">
        Let’s go on an adventure
      </Typography>
      <Typography type="p" className="adventure-subtitle">
        Find and book a great experience.
      </Typography>

      <div className="adventure-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`adventure-card ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-text-content">
              <Typography type="p" className="card-title">{card.title}</Typography>
              <div className="places-badge">{card.places}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="adventure-nav">
        <Button variant="icon" className="nav-button" onClick={handlePrev} icon={<FaArrowLeft />} />
        <Button variant="icon" className="nav-button" onClick={handleNext} icon={<FaArrowRight />} />
      </div>
    </section>
  );
};

export default AdventureSection;
