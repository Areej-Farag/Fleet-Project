const Review = require("../models/review.model");

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("tripId");
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get review by Trip ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate("tripId");
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  const { tripId, comment, rating, date } = req.body;

  const review = new Review({ tripId, comment, rating, date });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update review
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });

    const { tripId, comment, rating, date } = req.body;

    if (tripId) review.tripId = tripId;
    if (comment) review.comment = comment;
    if (rating) review.rating = rating;
    if (date) review.date = date;

    const updatedReview = await review.save();
    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete review
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
