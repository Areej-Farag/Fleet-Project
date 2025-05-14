const jwt = require('jsonwebtoken');
function auth(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ message: 'No token provided' })
    const token = authHeader.split(' ')[1]
    console.log("token", token);
    console.log("authHeader", authHeader);
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        req.user = decoded
        console.log("decoded", decoded);
        next()
    } catch (err) {
        res.status(403).json({ message: 'Invalid token' })
    }
}

module.exports = auth
