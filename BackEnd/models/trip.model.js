const mongoose = require("mongoose");

<<<<<<< HEAD
// const reviewSchema = require("./review.model");

=======
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
const availableDateSchema = new mongoose.Schema({
  date: { type: String, required: true }, 
  availableSeats: { type: Number, required: true },
});

const tripSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
<<<<<<< HEAD
  governate: { type: Schema.Types.ObjectId, ref: "Governate", required: true },
=======
  governate: { type: mongoose.Schema.Types.ObjectId, ref: "Governorate", required: true },
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
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
