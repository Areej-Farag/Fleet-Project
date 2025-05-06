const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true }, // نفترض وجود حقل ID فريد
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // من الضروري وجود كلمة مرور (يجب تشفيرها)
    role: { type: String, enum: ['user', 'admin'], default: 'user' }, // مثال على حقل للصلاحيات
    phoneNumber: { type: String },
    address: {
        street: { type: String },
        city: { type: String },
        postalCode: { type: String },
        country: { type: String }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
