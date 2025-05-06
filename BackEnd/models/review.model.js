const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
<<<<<<< HEAD
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
=======
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip', required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: String, required: true } 
});

module.exports = mongoose.model('Review', reviewSchema);
