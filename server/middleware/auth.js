const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'Authorization denied, no token' });
  }

  //Verify token
  try {
    // check if need a promise or async await
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.student = decoded.student;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
