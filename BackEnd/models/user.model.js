const mongoose = require('mongoose');

const paymentMethodSchema = new mongoose.Schema({
  type: String,
  cardNumber: String,
  expiryDate: String,
  cardHolderName: String,
  cvv: String,
}, { _id: false });

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  postalCode: String,
  country: String,
}, { _id: false });

const bookingHistorySchema = new mongoose.Schema({
  tripId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
  bookingDate: String,
  status: String,
  totalPrice: Number,
}, { _id: false });

const wishlistItemSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: 'Trip' },
  name: String,
}, { _id: false });

const preferencesSchema = new mongoose.Schema({
  preferredCategory: String,
  notifications: { type: Boolean, default: true },
}, { _id: false });

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true }, 
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, 
  profilePicture: String,
  paymentMethods: [paymentMethodSchema],
  phoneNumber: String,
  address: addressSchema,
  bookingHistory: [bookingHistorySchema],
  preferences: preferencesSchema,
  points: { type: Number, default: 0 },
  wishlist: [wishlistItemSchema],
  provider: { type: String, enum: ['google', 'apple', 'local'], default: 'local' },
  createdAt: { type: String },
});

module.exports = mongoose.model('User', userSchema);
