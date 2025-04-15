import React from 'react';
import '../Styles/atoms.css';

const PriceBox = ({ priceBefore, priceNow }) => {
    return (
        <div className="price-box">

            {priceBefore && priceNow !== priceBefore && (
                <div className="old-price-container">
                    <OldPrice price={`${priceBefore} EGP`} />
                    <div className="dash-line-container">
                        <DashLine />
                    </div>
                </div>
            )}

            <NewPrice price={`${priceNow} EGP`} />
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
