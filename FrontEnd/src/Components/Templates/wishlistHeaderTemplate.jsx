import React from "react";
import Typograph from "../Atoms/Typograph";
import Button from "../Atoms/Button";
import colors from "../Atoms/Colors";
import "../Styles/templates.css";

const WishlistHeaderTemplate = ({ bookings }) => {
  return (
    <div className="wishlist-header-template p-4">
      <Typograph variant="h4" bold color={colors.Neutrals[1]}>
        Bookings
      </Typograph>
      <Typograph variant="muted" className="mb-4">
        You added {bookings?.length} items to wishlist
      </Typograph>

      <div className="tabs mb-3 d-flex gap-3">
        <Button label="Flights" shape="rounded" />
        <Button label="Cars" shape="rounded" />
        <Button label="Things to do" shape="rounded" />
      </div>

      {bookings?.map((booking, index) => (
        <div
          key={index}
          className="booking-card d-flex align-items-center p-3 shadow-sm mb-3 rounded bg-white"
        >
          <div className="airline px-3 py-2 bg-light rounded">
            {booking.airline}
          </div>
          <div className="mx-4">
            <Typograph variant="h6" bold>
              {booking.from}
            </Typograph>
            <Typograph variant="small" color={colors.Neutrals[4]}>
              {booking.departure}
            </Typograph>
          </div>
          <div className="mx-4">
            <Typograph variant="h6" bold>
              {booking.to}
            </Typograph>
            <Typograph variant="small" color={colors.Neutrals[4]}>
              {booking.arrival}
            </Typograph>
          </div>
          <div className="ms-auto">
            <Button label="View detail" color="primary" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistHeaderTemplate;
