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
    type: String // ← رابط الفيديو
  },
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Governorate', governorateSchema);
