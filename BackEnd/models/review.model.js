const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  tripId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Trip", 
    required: true },

  comment: { 
    type: String, 
    required: true },

  rating: {
     type: Number,
     required: true },

  date: { 
    type: String, 
    required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
