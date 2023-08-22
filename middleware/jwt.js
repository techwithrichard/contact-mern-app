const jwt = require("jsonwebtoken");

const authenticationMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header("Authorization");

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user information to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Access denied. Invalid token." });
  }
};

module.exports = authenticationMiddleware;
