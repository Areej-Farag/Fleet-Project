import React, { useState, useEffect } from "react";
import WishlistHeaderTemplate from "../Templates/wishlistHeaderTemplate";
import SuggestedPlacesTemplate from "../Templates/suggestedplacetemplate";
import { users } from "../../Mocks/Users";
import { trips } from "../../Mocks/Trips";
import { useParams } from "react-router";


const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const user = users.find((user) => user.id === userId);
    if (user && user.wishlist) {
      const userWishlist = user.wishlist.map((item) =>
        trips.find((trip) => trip.id === item.id)
      ).filter(Boolean); 
      setWishlist(userWishlist);
    }
  }, [userId]);
console.log(wishlist);

  return (
    <div>
      <WishlistHeaderTemplate trips={wishlist} />
      <SuggestedPlacesTemplate />
    </div>
  );
};

export default WishlistPage;
