// controllers/auth.controller.js
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const client = new OAuth2Client("GOOGLE_CLIENT_ID");

exports.googleLogin = async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: "GOOGLE_CLIENT_ID"
    });

    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        id: sub,
        name,
        email,
        profilePicture: picture,
        createdAt: new Date().toISOString(),
      });
    }

    const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token: jwtToken, user });
  } catch (err) {
    res.status(401).json({ message: "Invalid Google token" });
  }
};
