const mongoose = require("mongoose");

const reviewSchema = require("./review.model");

const availableDateSchema = new mongoose.Schema({
  date: { type: String, required: true }, // برضه ممكن نخليه Date لو حابة
  availableSeats: { type: Number, required: true },
});

const tripSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  governate: { type: Schema.Types.ObjectId, ref: "Governate", required: true },
  company: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  detailesImages: { type: [String], minlength: 3 },
  program: [String],
  features: [String],
  duration: { type: String },
  availableDates: [availableDateSchema],
  price: { type: Number, required: true },
  discount: { type: Number },
  rating: { type: Number, default: 0 },
  reviews: [reviewSchema],
  category: { type: String },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
