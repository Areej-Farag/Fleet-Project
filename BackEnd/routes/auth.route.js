// routes/auth.route.js
const router = require('express').Router();
const { googleLogin } = require('../controllers/auth.controller');

router.post('/google-login', googleLogin);

module.exports = router;
