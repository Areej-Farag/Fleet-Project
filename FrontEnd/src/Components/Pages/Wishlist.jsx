import React from "react";
import WishlistHeaderTemplate from "../Templates/wishlistHeaderTemplate";
import SuggestedPlacesTemplate from "../Templates/suggestedplacetemplate";

const WishlistPage = () => {
  const bookings = [
    {
      id: 1,
      airline: "Emirates",
      from: "AKL",
      to: "SGN",
      departure: "5:45 AM",
      arrival: "9:45 AM",
    },
    {
      id: 2,
      airline: "Emirates",
      from: "AKL",
      to: "SGN",
      departure: "5:45 AM",
      arrival: "9:45 AM",
    },
  ];

  const suggestions = [
    { title: "Nature house", image: "img1.jpg", price: "$82,006" },
    { title: "Nature house", image: "img2.jpg", price: "$82,006" },
    { title: "Nature house", image: "img3.jpg", price: "$82,006" },
  ];

  return (
    <div>
      <WishlistHeaderTemplate bookings={bookings} />
      <SuggestedPlacesTemplate suggestions={suggestions} />
    </div>
  );
};

export default WishlistPage;
