import React from 'react';
import '../Styles/atoms.css';
import { AiFillStar } from 'react-icons/ai'; // استيراد أيقونة النجمة من react-icons

const Rate = ({ rating, reviewCount }) => {
    return (
        <div className="rate-box">
            <div className="star-box">
                <AiFillStar className="star-icon" />
            </div>
            <div className="rating-box">
                <span className="rating">{rating}</span>
            </div>
            {reviewCount && <span className="review-count">({reviewCount})</span>} {/* إضافة جزء review count */}
        </div>
    );
};

export default Rate;