const mongoose = require('mongoose');

const governorateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  video: {
    type: String 
  },
  trips: [{
    TripId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trip'
    },
    name: {
      type: String
    }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Governorate', governorateSchema);
