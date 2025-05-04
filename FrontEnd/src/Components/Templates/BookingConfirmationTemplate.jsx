import React from "react";
import BookingConfirmation from "../Organisms/BookingConfirmation";
import ImageComponent from "../Atoms/ImageComponent";
import Button from "../Atoms/Button";
import Photo from "../../assets/Images/primary img.png";
import "../Styles/templates.css";

export default function BookingConfirmationTemplate() {
  return (

    <div className="booking-confirmation d-flex flex-column container flex-md-row gap-4 p-3 p-md-4">
      
      <div className="col-12 col-md-6 p-2">
        <div className="image-container w-100 ">
          <ImageComponent src={Photo} title={"Image Title"} />
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
      <div className="col-12 col-md-6 p-2">
        <BookingConfirmation />
      </div>
    </div>
  );
}
