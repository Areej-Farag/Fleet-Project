import React from "react";
import BookingConfirmation from "../Organisms/BookingConfirmation";
import ImageComponent from "../Atoms/ImageComponent";
import Button from "../Atoms/Button";
import Photo from "../../Images/primary img.png";
import "../Styles/templates.css";

export default function BookingConfirmationTemplate() {
  return (
    <div className="booking-confirmation d-flex gap-5 p-4">
      <div className="col-md-6 col-12 p-2">
        <div className="image-container">
          <ImageComponent
            src={Photo}
            title="Queenstown view"
            type="fullyRounded"
          />
          <div className="d-flex justify-content-center gap-2 mt-3">
            <Button color="trans" shape="small-circle" size="default">
              ←
            </Button>
            <Button color="trans" shape="small-circle" size="default">
              →
            </Button>
          </div>
        </div>
      </div>
      <BookingConfirmation />
    </div>
  );
}
