import React from 'react';
import '../Styles/atoms.css'; // استيراد أنماط atoms.css

const Rate = ({ rating }) => {
    return (
        <div className="rate-box">
            <div className="star-box">
                <span className="star">★</span>
            </div>
            <div className="rating-box">
                <span className="rating">{rating}</span>
            </div>
        </div>
    );
};

export default Rate;