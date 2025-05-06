const mongoose = require("mongoose");

const availableDateSchema = new mongoose.Schema({
  date: { type: String, required: true }, 
  availableSeats: { type: Number, required: true },
});

const tripSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  // governate: { type: mongoose.Schema.Types.ObjectId, ref: "Governorate", required: true },
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
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  category: { type: String },
});

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
