import React from "react";
import colors from "../Atoms/Colors";
import Typograph from "../Atoms/Typograph";
import { Rate } from "antd";
import InputField from "../Atoms/InputField";
import "../Styles/organisms.css";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Atoms/Button";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import Comment from "../Molecules/Comment";
import { trips } from "../../Mocks/Trips";
import Line from "../Atoms/Lines";
export default function TripComments({
  tripName,
  reviewsCont,
  tripReviews = trips[0].reviews,
}) {
  return (
    <div className="trip-comments-container">
      <div className="comments-container-header">
        <Typograph variant="h5" color={colors.Neutrals[2]} bold={true}>
          Add your review
        </Typograph>
        <div className="small-text d-flex justify-content-between">
          <div className="text d-flex gap-2">
            <Typograph variant="small" color={colors.Neutrals[4]}>
              Kindly add your honest review 
            </Typograph>
            <Typograph variant="small" color={colors.Neutrals[2]}>
              { "  "+tripName}
            </Typograph>
          </div>
          <div className="rate-stars">
            <Rate allowHalf defaultValue={2.5} />
          </div>
        </div>
      </div>
      <div className="comment-container-input">
        <InputField
          placeholder="Share your thoughts"
          hasButton={true}
          buttonContent={
            <Button
              color="blue"
              shape="default"
              size="small"
              icon={<FaArrowRight />}
            >
              <small>Post It</small>
            </Button>
          }
          rounded={false}
          large={true}
          hasIcon={true}
          iconContent={<FaRegFaceSmileBeam />}
        />
      </div>
      <div className="reviews-container">
        <Typograph variant="h5" color={colors.Neutrals[2]} bold={true}>
          {tripReviews?.length || 0} Comments
        </Typograph>

        <div className="comments">
          {tripReviews?.length > 0 ? (
            tripReviews.map((review, index) => (
              <React.Fragment key={index}>
                <Comment
                  comment={review.comment}
                  date={review.date}
                  rating={review.rating}
                />
                <Line height="1px" />
              </React.Fragment>
            ))
          ) : (
            <Typograph variant="small" color={colors.Neutrals[4]}>
              No reviews yet. Be the first to comment!
            </Typograph>
          )}
        </div>
      </div>
    </div>
  );
}
