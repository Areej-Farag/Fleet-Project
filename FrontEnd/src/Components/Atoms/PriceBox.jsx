import React from 'react';
import '../Styles/atoms.css';

const PriceBox = () => {
    return (
        <div className="price-box">
            <div className="old-price-container">
                <OldPrice price="$699" />
                <div className="dash-line-container">
                    <DashLine />
                </div>
            </div>
            <NewPrice price="$548" />
        </div>
    );
};

const OldPrice = ({ price }) => {
    return <div className="old-price">{price}</div>;
};

const DashLine = () => {
    return <div className="dash-line"></div>;
};

const NewPrice = ({ price }) => {
    return <div className="new-price">{price}</div>;
};

export default PriceBox;