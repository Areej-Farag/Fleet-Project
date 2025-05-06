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
<<<<<<< HEAD
    type: String // ← رابط الفيديو
=======
    type: String 
>>>>>>> dbb9ce30a56c7e99991c6c773ce6f4b3235c9396
  },
  trips: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Governorate', governorateSchema);
